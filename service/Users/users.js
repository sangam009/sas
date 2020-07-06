const mongo = require('../../utils/mongo');

// ToDo: Make single instance of db object
// Remove logging of sensitive information

class Users {
	constructor() {
		this.mongo = mongo;
	}

	async createUser(userObj) {
		const mongoClient = await mongo.getClient();
		const dbo = mongoClient.db('sas');
		await dbo.collection('users').insertOne(userObj).then(
			(result) => {
				console.log(`user created successfully${result}`);
				return result;
			},
		).catch((error) => console.log(error));
	}

	async getUserByExternalId(provider, id) {
		console.log('fetching external ID');
		const mongoClient = await mongo.getClient();
		const dbo = mongoClient.db('sas');
		const user = await dbo.collection('users').findOne({ providers: { $elemMatch: { provider, id } } });
		return user;
	}

	async getUserById(id) {
		const mongoClient = await mongo.getClient();
		const dbo = mongoClient.db('sas');
		await dbo.collection('users').findOne((u) => u.id === id).then(
			(result) => {
				console.log(`user found where user id = ${id}`);
				return result;
			},
		).catch((error) => console.log(error));
	}
}

module.exports = new Users();
