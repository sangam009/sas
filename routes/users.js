const express = require('express');
const passport = require('passport');
const token = require('../utils/token'); 
require('../config/facebook');

// ToDo:// Store AuthToken in DB
// Mark: Callback to generate access token
function generateUserToken(req, res) {
	console.log(`generating token for user ID ${req.user.id}`);
	const accessToken = token.generateAccessToken(req.user.id);
	console.log(`access Token: ${accessToken}`);
	res.json(accessToken);
}

const router = express.Router();

router.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'], session: false }));

// Todo: Apply redirect URL
router.get('/auth/facebook/callback',
	passport.authenticate('facebook', { session: false, failureRedirect: '/fail' }),
	generateUserToken);

router.get('/fail', (req, res) => {
	res.render('Failed attempt');
});

module.exports = router;
