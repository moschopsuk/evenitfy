var express     = require('express'),
    path        = require('path'),
    logger      = require('morgan'),
    passport    = require('passport'),
    session     = require('express-session'),
    flash       = require('express-flash'),
    env         = require('node-env-file'),
    mongoose    = require('mongoose'),
    colors      = require('colors'),
    breadcrumbs = require('express-breadcrumbs'),
    bodyParser  = require('body-parser');

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

//breadcrumbs
app.use(breadcrumbs.init());

//Repond to POST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
    res.locals.breadcrumbs = req.breadcrumbs();

    if (req.user) {
        res.locals.user = req.user;
    }

    next();
});

//pretty html in dev env
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
});

//Express routes
require('./routes')(express, app, passport);

//Serv public folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
    if (app.get('env') === 'production') {
        console.log('Running in production mode'.green);
    } else {
        console.log('Running in development mode'.yellow);
    }

    console.log('Express server listening on port ' + app.get('port'));
});
