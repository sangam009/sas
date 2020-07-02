const { MongoClient } = require('mongodb');

const url = process.env.MONGO_DB_URL || 'mongodb://localhost:27017'; // 'mongodb+srv://admin:admin@cluster0.gt5ch.gcp.mongodb.net/';
let mongoClient;

const mongo = {
	getClient: async () => {
		try {
			if (mongoClient && mongoClient.isConnected()) {
				return mongoClient;
			}
			mongoClient = await MongoClient.connect(url);
			return mongoClient;
		} catch (error) {
			console.log(error);
			throw new Error('unable to connect to the mongo db client');
		}
	},
};

module.exports = mongo;
