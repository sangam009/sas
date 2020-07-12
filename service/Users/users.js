const mongo = require('../../utils/mongo');

class Users {

	async createUser(userObj) {
		const db = await mongo.getClient();
		await db.collection('users').insertOne(userObj).then(
			(result) => {
				console.log(`user created successfully${result}`);
				return result;
			},
		).catch((error) => console.log(error));
	}

	async getUserByExternalId(provider, id) {
		const db = await mongo.getClient();
		return await db.collection('users').findOne({providers: {$elemMatch: {provider, id}}});
	}

	async getUserById(id) {
		const db = await mongo.getClient();
		await db.collection('users').findOne((u) => u.id === id).then(
			(result) => {
				console.log(`user found where user id = ${id}`);
				return result;
			},
		).catch((error) => console.log(error));
	}
}

module.exports = new Users();
