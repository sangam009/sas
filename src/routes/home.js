const express = require('express');

const router = express.Router();
const homePage = require('../api/Controller/home');
// api/home/
router.route('/')
	.get(homePage.findAll)
	// We will retire this API in production
	// Or we can keep using some smsdevadmin scope
	.post(homePage.create);

module.exports = router;
