const express = require("express");

const router = express.Router();
const aboutUs = require("../api/Controller/aboutUs");
// api/contact/
router
  .route("/")
  /* api/contact : to create collection of any enquiry from contact us page */
  .post(aboutUs.create)

  // ToDO: This API should have  access only to smsdevadmin scope
  /* api/contact : to get all enquiry */
  .get(aboutUs.findAll);

module.exports = router;
