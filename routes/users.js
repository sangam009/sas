const express = require("express");
const authService = require("../service/Auth");

// ToDo:// Store AuthToken in DB
// Mark: Callback to generate access token

const router = express.Router();

router.get("/auth", (req, res, next) => {
  new authService(req.query.name).getAuthorize()(req, res, next);
});

// Todo: Apply redirect URL
router.get(
  "/auth/callback",
  (req, res, next) => {
    new authService(req.query.name).isAuthorizeCallBack()(req, res, next);
  },
  (req, res, next) => {
    new authService(req.query.name).generateUserToken(req, res, next);
  }
);

router.get("/fail", (req, res) => {
  res.render("Failed attempt");
});

module.exports = router;
