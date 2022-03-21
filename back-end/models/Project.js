var mongoose = require('mongoose');

var ProjectSchema = new mongoose.Schema({
    name: String,
    bio: String,
    tools: String,
    description: String,
    logo: String,
    mockup: String,
    github: String
});

module.exports = mongoose.model('Project', ProjectSchema);