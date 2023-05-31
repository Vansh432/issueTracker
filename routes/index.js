const express = require('express');//express module-->

const router = express.Router();//create new Router Object-->
const home_controller = require('../controller/home_controller')//HomeController modules-->

router.get('/', home_controller.home);//home page controller-->
router.get('/create_project', home_controller.createProject);//create project page controller-->
router.post('/projectSet', home_controller.project);//project set controller-->
router.get('/projectview', home_controller.projectview);//project view controller-->
router.get('/projectpage', home_controller.projectpage);//project page controller-->
router.get('/create_issue', home_controller.createissue);// create issue controller-->
router.post('/new_issue_created', home_controller.issuecreated);//new issue created controller-->
router.get('/delete_issue', home_controller.delete_issue);//delete issue controller-->

module.exports = router;//module.exports = router;
