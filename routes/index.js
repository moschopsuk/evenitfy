module.exports = function (express, app, passport) {
     var auth        = require('./auth')(app, passport);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/auth/login');
    }
};
