var express = require('express');
var path = require('path'); //had to add
var router = express.Router();

var mongoose = require('mongoose');
var Project = require('../models/Project.js');

//routes api/projects, api/project/:id

router.get('/api/projects', function(req, res, next){
    Project.find(function(err, projects){
        if (err) return next(err);
        res.json(projects);
    });
});

router.get('/api/project/:id', function(req, res, next){
    Project.findById(req.params.id, function(err, project){
        if(err) return next(err);
        res.json(project);
    });
});

module.exports = router;