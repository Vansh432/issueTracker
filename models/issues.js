const mongoose = require('mongoose');

const issue_schema = new mongoose.Schema({
    titleissue: {
        type: "string",
    },
    labelissue: {
        type: ["string"],
    },
    authorissue: {
        type: "string"
    },
    descriptionissue: {
        type: "string"
    },
    projectid: {
        type: "string",
    }
})

const create_issue = mongoose.model('create_issue', issue_schema);
module.exports = create_issue;
