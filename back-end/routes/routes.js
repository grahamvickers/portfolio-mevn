var express = require('express');
var path = require('path'); //had to add
var router = express.Router();

var mongoose = require('mongoose');
var Student = require('../models/Student.js');

//routes api/students, api/student/:id

router.get('/api/students', function(req, res, next){
    Student.find(function(err, students){
        if (err) return next(err);
        res.json(students);
    });
});

router.get('/api/student/:id', function(req, res, next){
    Student.findById(req.params.id, function(err, student){
        if(err) return next(err);
        res.json(student);
    });
});

module.exports = router;