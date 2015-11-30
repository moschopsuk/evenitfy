var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({
    email:      { type: String, required: true, index: { unique: true } },
    password:   { type: String, required: true },
    fullname:   { type: String },
    lastIP:     { type: String },
    lastLogin:  { type: Date },
    roles:      { type:  Array }
});

UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        // hash the password along with our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.hasRole = function (role) {
    for (var i = 0; i < this.roles.length; i++) {
        if (this.roles[i] === role) {
            // if the role that we are chekign matches the 'role' we are
            // looking for return true
            return true;
        }

    };
    // if the role does not match return false
    return false;
};

module.exports = mongoose.model('User', UserSchema);
