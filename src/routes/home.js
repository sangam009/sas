const express = require('express');

const router = express.Router();
const homePage = require('../api/Controller/home');
// api/home/
router.route('/').get(homePage.findAll);

module.exports = router;
