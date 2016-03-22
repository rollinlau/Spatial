var express     = require('express');
var router      = express.Router();
var request     = require('request');

var mongoose    = require('mongoose');

var EventSchema = require('../models/event')

/* API Call: Eventful (mock request info) */
var location ="Boston";
var radius ="2"
var key = "rssWDw2hGkgX9J66";
var queryString= 'http://api.eventful.com/json/events/search?...&l='+ location + '&within' + radius + '&app_key=' + key

request(queryString, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        parsedEvents = JSON.parse(body).events.event;
        parsedEvents.forEach(function(event) {
            SpatialEvent = new EventSchema()
            SpatialEvent.title = event.title;
            SpatialEvent.description = event.description;
            SpatialEvent.address = event.venue_address;
            SpatialEvent.venue = event.venue_name;
            SpatialEvent.city = event.city_name;
            SpatialEvent.region = event.region_name;
            SpatialEvent.rc = event.region_abbr;
            SpatialEvent.country = event.country_name;
            SpatialEvent.cc = event.country_abbr;
            SpatialEvent.postal = event.postal_code;
            SpatialEvent.latitude = event.latitude;
            SpatialEvent.longitude = event.longitude;
            SpatialEvent.start = event.start_time;
            SpatialEvent.stop = event.stop_time;
            SpatialEvent.created = event.created;
            SpatialEvent.timezone = event.olson_path;
            SpatialEvent.url = event.venue_url;
            router.post('/events', function(req, res, next) {
                SpatialEvent.save(function(err) {
                        if (err) {res.send(err);}
                        else {res.send ({message: 'New events received.'})}
                })
            });
        });
    }
});

/* GET event listing */
router.get('/events', function(req, res, next) {
    EventSchema.find({}, function(err, results) {
        res.json(results);
    })
});

module.exports = router;
