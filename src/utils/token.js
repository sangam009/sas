const jwt = require('jsonwebtoken');
const config = require('../config/auth');

// Generate an Access Token for the given User ID
function generateAccessToken(userId) {
	// 1hr
	const expiresIn = Math.floor(Date.now() / 1000 + 3600);
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
