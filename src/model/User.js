const mongoose = require('mongoose');
const Promise = require('bluebird');

const { Schema } = mongoose;
const UserSchema = new Schema({
	id: Number,
	token: String,
	email: String,
	name: String,
	provider: String,
});

UserSchema.statics = {
	
	get(id) {
		return this.findById(id)
			.exec()
			.then((user) => {
				if (user) {
					return user;
				}
				const err = 'No such user exists!';
				return Promise.reject(err);
			});
	},

};

module.exports = mongoose.model('user', UserSchema);
