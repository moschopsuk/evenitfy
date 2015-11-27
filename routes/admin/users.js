var express     = require('express'),
    router      = express.Router();

router.get('/', function(req, res) {
    req.breadcrumbs('Users', '/admin/users');
    res.render('admin/users/index');
});

module.exports = router;
