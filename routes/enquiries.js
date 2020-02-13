var express = require('express');
var enquiry = require('../models/Enquiry');
var verify = require('../verify');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        enquiry.find({})
            .then((enquiry) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(enquiry);
            }, (err) => next(err))
            .catch((err) => next(err));
    }) 
  
    .post((req, res, next) => {
        enquiry.create(req.body)
            .then((enquiry) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(enquiry);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported!');
    })
    
    .delete((req, res, next) => {
        enquiry.deleteMany({})
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

    router.route('/:id')
    .get((req, res, next) => {
        enquiry.findById(req.params.id)
            .then((enquiry) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(enquiry);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        enquiry.findByIdAndUpdate(req.params.id,
             { $set: req.body }, 
             { new: true, useFindAndModify: false })
            .then((enquiry) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(enquiry);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        enquiry.findByIdAndDelete(req.params.id)
            .then((enquiry) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(enquiry);
            }, (err) => next(err))
            .catch((err) => next(err));
    });



module.exports = router;