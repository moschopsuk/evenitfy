var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
    slug:           { type: String, required: true },
    name:           { type: String },
    summary:        { type: String },
    startDateTime:  { type: Date },
    endDateTime:    { type: Date }
});

module.exports = mongoose.model('Event', EventSchema);
