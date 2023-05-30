const issue_schema = require('../models/issues');//
const projectschema = require('../models/projects');
module.exports.filter = function (req, res) {

  Promise.all([
    projectschema.find(),
    issue_schema.find()
  ])
    .then(([data, issudata]) => {
      let arrayissue = [];
      for (let i of issudata) {
        console.log(`${req.query}`);
        if (i.labelissue.includes(`${req.query.bug}`)) {

          arrayissue.push(i);
        }

      }

      return res.render('project_view', { title: "project view", data, issuedata: arrayissue });
    })
    .catch(err => {

      return res.render('project_view', { title: "project view", data: {}, issuedata: {} });
    });

}