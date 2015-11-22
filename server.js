var express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    passport = require('passport'),
    session = require('express-session'),
    flash = require('express-flash'),
    bodyParser = require('body-parser');

var app = express();

env(__dirname + '/.env');

//DB
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);
connect();

function connect () {
    var options = { server: { socketOptions: { keepAlive: 1 } } };
    mongoose.connect(process.env.MONGO_DB, options);
}

//Application port
app.set('port', process.env.PORT || 3000);

//Log output to console
app.use(logger('dev'));

//Repond to POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Serv public folder
app.use(express.static(path.join(__dirname, 'public')));

//Set jade views
app.set('views', path.join(__dirname, 'assets/views'));
app.set('view engine', 'jade');

//Session Management
require('./lib/passport')(passport);
app.use(session({ secret: 'jailbreakapp', resave: true, saveUninitialized: true }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//pass user object to templates
app.use(function(req, res, next){
    if (req.user) {
        res.locals.user = req.user;
    }
    next();
});

//pretty html in dev env
if (app.get('env') === 'dev') {
    app.locals.pretty = true;
}

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
