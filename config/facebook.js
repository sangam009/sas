const FacebookStrategy = require('passport-facebook').Strategy;
const passport = require('passport');
const config = require('./auth');
const UserModel = require('../model/user');
const User = require('../service/Users/users');

const passportConfig = {
	clientID: config.authentication.facebook.clientID,
	clientSecret: config.authentication.facebook.clientSecret,
	callbackURL: config.authentication.facebook.callbackURL,
	profileFields: config.authentication.facebook.profileFields,
};

// ToDo : Enable serialization for users
// used to serialize the user for the session
passport.serializeUser((user, done) => {
	done(null, user);
});

// used to deserialize the user
passport.deserializeUser((id, done) => {
	done(null, id);
});

passport.use(
	new FacebookStrategy(passportConfig,
		async (token, refreshToken, profile, done) => {
			let user;
			try {
				user = await User.getUserByExternalId('facebook', profile.id);
				console.log(`user${user}`);
				if (!user) {
					const newUser = new UserModel(
						profile.id,
						token,
						(profile.emails[0].value || '').toLowerCase(),
						`${profile.name.givenName} ${profile.name.familyName}`,
						'facebook',
					);
					try {
						user = await User.createUser(newUser);
						return done(null, user);
					} catch (error) {
						return done(error);
					}
				}
				return done(null, user);
			} catch (error) {
				return done(error);
			}
		}),
);
