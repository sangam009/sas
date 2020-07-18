const express = require("express");

const router = express.Router();
const privacy = require("../api/Controller/privacy");
// api/contact/
router
  .route("/")
  /* api/contact : to create collection of any enquiry from contact us page */
  .post(privacy.create)

  // ToDO: This API should have  access only to smsdevadmin scope
  /* api/contact : to get all enquiry */
  .get(privacy.findAll);

module.exports = router;
