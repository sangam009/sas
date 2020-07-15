const dbConnection = require('../../utils/dbConnection');
const User = require('../../model/User');

class Users {
	async createUser(userObj) {
		try {
			const modeltemp = new User(userObj);
			const done = await modeltemp.save();
			return done;
		} catch (error) {
			if (error.code == 11000) {
				console.log('user already exists');
				return userObj;
			} 
			console.log(error.code);
			throw new Error(error);
		}
	}

	async getUserBasedOnFilters(filter) {
		try {
			const done = await User.find(filter);
			return done;
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = Users;
