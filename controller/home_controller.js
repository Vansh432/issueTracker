const projectschema = require('../models/projects');//project schema from models-->
const issueschema = require('../models/issues');//issues schema from models-->

//home controller -->
module.exports.home = function (req, res) {

  projectschema.find({}).then(data => {
    return res.render('Home', { title: "Issue Tracker", projectlist: data });
  }).catch(err => {
    return;
  })
}

//create a new project controller and push project data in database-->
module.exports.project = function (req, res) {
  const data = req.body;
  projectschema.create(data).then(function (creatproject) {
    return res.redirect('/');
  }).catch(function (err) {
    console.log(err);
    return;
  })

}

//render project form -->
module.exports.createProject = function (req, res) {
  return res.render('create_project', { title: "Create Project" });
}


//render project view [ejs]-->
module.exports.projectview = function (req, res) {
  res.cookie('project_id', req.query.id);
  return res.redirect('/projectpage');
}

//push data in project view[ejs] from database--->
module.exports.projectpage = function (req, res) {
  Promise.all([
    projectschema.findById(req.cookies.project_id),
    issueschema.find({ projectid: req.cookies.project_id })
  ])
    .then(([data, issudata]) => {

      return res.render('project_view', { title: "project view", data, issuedata: issudata });
    })
    .catch(err => {
      console.log(err);
      return res.render('project_view', { title: "project view", data: {}, issuedata: {} });
    });
}


//render create form --->

module.exports.createissue = function (req, res) {
  data = {
    projectname: "Create Issue"
  }
  return res.render('create_issue', { title: "Create Issue", data: data })
}



//issue created and push in database--->
module.exports.issuecreated = function (req, res) {

  req.body["projectid"] = req.cookies.project_id;
  issueschema.create(req.body).then(data => {
    return res.redirect('/projectpage');
  }).catch(err => {
    console.log(err);
  })
}



//Delete a issues --->
module.exports.delete_issue = function (req, res) {
  issueschema.findByIdAndDelete(req.query.id).then((deleteissue) => {
    return res.redirect('back');
  }).catch((err) => {
    return;
  })

}