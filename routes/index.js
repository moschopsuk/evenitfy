module.exports = function (express, app, passport) {
    var auth    = require('./auth')(app, passport),
        admin   = require('./admin/dashboard'),
        breadcrumbs = require('express-breadcrumbs'),
        users   = require('./admin/users');

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }

        res.redirect('/auth/login');
    }

    app.use(breadcrumbs.setHome({
        name: 'Admin',
        url: '/admin'
    }));

    app.use('/admin', isLoggedIn, admin);
    app.use('/admin/users', isLoggedIn, users);
};
