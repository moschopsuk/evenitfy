var express     = require('express'),
    appRoot     = require('app-root-path'),
    User        = require(appRoot + '/models').Users,
    router      = express.Router();

router.get('/', function(req, res) {
    req.breadcrumbs('Users', '/admin/users');

    User.find().then(function(users){
        res.render('admin/users/index', { users: users });
    });
});

module.exports = router;
