const mongoose = require('mongoose');

const dbConnection = (function () {
	const url = process.env.MONGO_DB_URL || 'mongodb://localhost:27017';
	let mongoClient; 

	async function dbConnect() {
		mongoClient = await mongoose.connect(url, {
			useNewUrlParser: true,
			poolSize: 5,
		});
		return mongoClient;
	}

	async function getdbClient() {
		try {
			if (mongoClient) {
				console.log('db connection is already alive');
				return mongoClient;
			} 
			console.log('Establishing new connection');
			mongoClient = await dbConnect();
			return mongoClient;
		} catch (error) {
			console.log(error);
			throw new Error('unable to connect to the mongo db client');
		}
	}
	return {
		getdbClient,
	};
}());

module.exports = dbConnection;
