var express = require("express");
var router = express.Router();
const getHomeData = require("../service/UI/home");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/home", getHomeData.getHomeData);

module.exports = router;
