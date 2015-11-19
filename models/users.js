var User = mongoose.model('User', {
    email:      String,
    password:   String,
    fullName:   String,
});


module.exports = User;
