module.exports = {
	facebook: {
		clientID: '276233780116295',
		clientSecret: '8ea2ff66a840c1949146cafd1f37e830',
		callbackURL: 'http://localhost:4001/users/auth/callback?name=facebook',
		profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
		profileFields: ['id', 'email', 'name'],
	},
	// To Do : Keep one hash key as secret
	token: {
		secret: 'secret',
		issuer: 'AmazingProducts',
		audience: 'smsweb',
	},
	cryptopassword: 'abc1233456',
};
