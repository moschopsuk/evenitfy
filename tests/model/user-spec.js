var appRoot     = require('app-root-path'),
    assert      = require('assert'),
    mongoose    = require('mongoose'),
    connection  = mongoose.connection,
    env         = require('node-env-file'),
    User        = require(appRoot + '/models/users');

describe('User Model', function() {

    before(function(done) {
        env(appRoot + '/.env');
        
        connection.on('error', console.error);
        connection.once('open', function () {
            done();
        });

        mongoose.connect(process.env.MONGO_DB);
    });

    it('new user model can be created', function(done) {
        testUser = new User({
            username: 'test@user',
            password: 'Password123'
        });

        testUser.save(function(err) {
            assert.equal(err, null, "No error should be present when saving a new user");
            done(); //Wait for DB
        });
    });

    it('find user in databse', function() {
        User.findOne({ username: 'test@user' }, function(err, user) {
            assert.equal(testUser, user, "user objects should match");
        });
    });

    it('match password to hashed password', function() {
        testUser.comparePassword('Password123', function(err, isMatch) {
            assert.equal(isMatch, true, "Passwords must match");
        });
    });

    describe('Errors', function() {
        it('error on duplicate username', function(done) {
            var testUser2 = new User({
                username: 'test@user',
                password: 'Password123'
            });

            testUser2.save(function(err) {
                assert.notEqual(err, null, "Error should be thown when saving duplicate user");
                done(); //Wait for DB
            });
        });

        it('match password to invalid hashed password', function() {
            testUser.comparePassword('123Password', function(err, isMatch) {
                assert.notEqual(isMatch, true, "Passwords must not match");
            });
        });
    });

    after(function(done) {
        //once all test are done drop the test table
        mongoose.connection.db.dropDatabase();
        connection.close(done);
    });

});
