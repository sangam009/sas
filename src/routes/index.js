const express = require("express");
const userRoutes = require("./users");
const homeRoutes = require("./home");
const contactUsRoutes = require("./contactUs");
const aboutUsRoutes = require("./aboutUs");
const privacyRoutes = require("./privacy");
const termsRoutes = require("./terms");

const router = express.Router();
router.get("/", (req, res, next) => {
  res.render("index", { title: "API  base path" });
});

router.use("/users", userRoutes);
router.use("/home", homeRoutes);
router.use("/contact", contactUsRoutes);
router.use("/aboutus", aboutUsRoutes);
router.use("/privacy", privacyRoutes);
router.use("/terms", termsRoutes);

module.exports = router;
