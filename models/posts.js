var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    body:               { type: String },
    isPublished:        { date: Boolean },
    creationDateTime:   { date: Date },
    publishDateTime:    { date: Date },
});

module.exports = mongoose.model('Post', PostSchema);
