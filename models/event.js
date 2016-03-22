var express     = require('express');
var router      = express.Router();

var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

// Event Schema
var EventSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: false},
    address: {type : String, required: true},
    venue: {type : String, require: true},
    city: {type: String, required: true},
    region: {type: String, required: true},
    rc: {type: String, required: true},
    country: {type: String, required: true},
    cc: {type: String, required: true},
    postal: {type: String, required: false},
    latitude: {type: String, required: true},
    longitude: {type: String, required: true},
    start: {type: String, required: true},
    stop: {type: String, required: true},
    created: {type: String, required: true},
    timezone: {type: String, required: true},
    url: {type: String, required: false}
});

module.exports = mongoose.model('event', EventSchema);
