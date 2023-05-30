const express = require('express');

const router = express.Router();

const filterController = require('../controller/filter_controller');

router.get('/', filterController.filter);

module.exports = router;