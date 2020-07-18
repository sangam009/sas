const express = require('express');

const router = express.Router();
const contactUs = require('../api/Controller/contactUs');
// api/contact/
router.route('/')
	/* api/contact : to create collection of any enquiry from contact us page */
	.post(contactUs.create)

	// ToDO: This API should have  access only to smsdevadmin scope
	/* api/contact : to get all enquiry */
	.get(contactUs.findAll);

module.exports = router;
