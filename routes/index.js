module.exports = function (express, app, passport) {
    var auth    = require('./auth')(app, passport),
        admin   = require('./admin');

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/auth/login');
    }


    app.use('/admin', isLoggedIn, admin);
};
