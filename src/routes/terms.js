const express = require("express");

const router = express.Router();
const terms = require("../api/Controller/terms");
// api/contact/
router
  .route("/")
  /* api/contact : to create collection of any enquiry from contact us page */
  .post(terms.create)

  // ToDO: This API should have  access only to smsdevadmin scope
  /* api/contact : to get all enquiry */
  .get(terms.findAll);

module.exports = router;
