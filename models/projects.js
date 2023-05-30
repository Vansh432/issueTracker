const mongoose = require('mongoose');

const project = new mongoose.Schema({

    projectname: {
        type: 'String',
        required: true
    },
    author: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    }
})

const projects = mongoose.model('projects', project);
module.exports = projects;