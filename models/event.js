var express     = require('express');
var router      = express.Router();

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Event Schema
var EventSchema = new Schema({
    title: {type: String, required: false},
    description: {type: String, required: false},
    address: {type : String, required: false},
    venue: {type : String, require: false},
    city: {type: String, required: false},
    region: {type: String, required: false},
    rc: {type: String, required: false},
    country: {type: String, required: false},
    cc: {type: String, required: false},
    postal: {type: String, required: false},
    latitude: {type: String, required: false},
    longitude: {type: String, required: false},
    start: {type: String, required: false},
    stop: {type: String, required: false},
    created: {type: String, required: false},
    timezone: {type: String, required: false},
    url: {type: String, required: false}
});

module.exports = mongoose.model('event', EventSchema);
