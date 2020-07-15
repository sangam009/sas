const passport = require('passport');
const constants = require('../../model/constants');
const callbacks = require('../../utils/callbacks');
const AuthConf = require('./AuthConf');
const crypto = require('../../utils/crypto');
const session = require('../Users/sessions');
const token = require('../../utils/token');

class Auth extends AuthConf {
	constructor(type) {
		super(type);
		this.type = constants.Auth.type.FACEBOOK.name;
	}

	getAuthorize() {
		passport.use(callbacks[this.type](new AuthConf(this.type).getConfig()));
		return passport.authenticate(
			this.type,
			constants.Auth.type[this.type.toUpperCase()].scope,
		);
	}

	isAuthorizeCallBack() {
		return passport.authenticate(
			this.type,
			constants.Auth.type[this.type.toUpperCase()].fallbackscope,
		);
	}

	async generateUserToken(req, res, next) {
		console.log(`generating token for user ID ${req.user.id}`);
		const accessToken = token.generateAccessToken(req.user.id);
		console.log(`access Token: ${accessToken}`);
		// try {
		// 	const data = new session();
		// 	const sessiondata = {
		// 		sessionId: `${accessToken}`,
		// 		userId: `${req.user.id}`,
		// 		provider: this.type,
		// 		createdAt: new Date(),
		// 		active: true,
		// 	};
		// 	await data.create(sessiondata);
		// 	if (!req.cookie || !req.cookie.userId) {
		// 		res.cookie('userId', crypto.encrypt(`${accessToken}`), {
		// 			maxAge: 1296000000,
		// 		});
		// 	}
		// 	res.redirect('/');
		// } catch (error) {
		// 	console.log(error);
		// 	next(error);
		// }
	}
}

module.exports = Auth;
