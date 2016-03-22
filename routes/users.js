var express = require('express');
var router = express.Router();

var mongoose    = require('mongoose');

var UserSchema = require('../models/user')

/* POST */
router.post('/events', function(req, res, next) {
    SpatialUser = new EventSchema(
      req.body
    );
    SpatialUser.save(function(err) {
            if (err) {res.send(err);}
            else {res.send ({message: 'New events received.'})}
    })
});

/* GET */
router.get('/users', function(req, res, next) {
    UserSchema.find({}, function(err, results) {
        res.json(results);
    })
});

module.exports = router;
