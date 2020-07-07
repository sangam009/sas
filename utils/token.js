const jwt = require("jsonwebtoken");
const config = require("../config/auth");

// Generate an Access Token for the given User ID
function generateAccessToken(userId) {
  const expiresIn = "1 hour";
  const { audience, issuer, secret } = config.token;

  const token = jwt.sign({}, secret, {
    expiresIn,
    audience,
    issuer,
    subject: userId.toString(),
  });

  return token;
}

module.exports = {
  generateAccessToken,
};
