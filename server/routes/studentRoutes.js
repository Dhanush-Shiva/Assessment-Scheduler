const express = require('express');
const router = express.Router();
const { getPublishedSchedules } = require('../controllers/studentController');

router.get('/schedules', getPublishedSchedules);

module.exports = router;