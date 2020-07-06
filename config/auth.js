module.exports = {
	authentication: {
		facebook: {
			clientID: '1497560470415660',
			clientSecret: 'dc7e30fa5679c2fbffcb6f9286ceb8db',
			callbackURL: 'http://localhost:3000/users/auth/facebook/callback',
			profileURL: 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
			profileFields: ['id', 'email', 'name'],
		},
		// To Do : Keep one hash key as secret
		token: {
			secret: 'secret',
			issuer: 'AmazingProducts',
			audience: 'smsweb',
		}, 
	},
};
