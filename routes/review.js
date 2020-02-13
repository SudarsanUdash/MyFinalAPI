var express = require('express');
var reviews = require('../models/Review');
var verify = require('../verify');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        reviews.find({})
            .then((reviews) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reviews);
            }, (err) => next(err))
            .catch((err) => next(err));
    }) 
  
    .post((req, res, next) => {
        reviews.create(req.body)
            .then((review) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(review);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

module.exports = router;