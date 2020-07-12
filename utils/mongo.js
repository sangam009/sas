const { MongoClient } = require('mongodb');

const mongo = (function() {
	let mongoClient;
	const url = process.env.MONGO_DB_URL || 'mongodb+srv://admin:admin@cluster0.gt5ch.gcp.mongodb.net/'; // 'mongodb://localhost:27017';
	async function createClient() {
		try {
			if (mongoClient && mongoClient.isConnected()) {
				console.log('previous Instance');
				return mongoClient;
			}
			console.log('new Instance');
			mongoClient = await MongoClient.connect(url);
			return mongoClient;
		} catch (error) {
			console.log(error);
			throw new Error('unable to connect to the mongo db client');
		}
	}
	return {
		getClient: async (dbName = 'sas')=> {
				const mongoClient = await createClient();
				return  mongoClient.db(dbName);
		}
	};
})();

module.exports = mongo;
