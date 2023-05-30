const express = require('express');

const router = express.Router();
const home_controller = require('../controller/home_controller')

router.get('/', home_controller.home);
router.get('/create_project', home_controller.createProject);
router.post('/projectSet', home_controller.project);
router.get('/projectview', home_controller.projectview);
router.get('/projectpage', home_controller.projectpage);
router.get('/create_issue', home_controller.createissue);
router.post('/new_issue_created', home_controller.issuecreated);
router.get('/delete_issue', home_controller.delete_issue);
router.use('/filter', require('./filter'));


module.exports = router;