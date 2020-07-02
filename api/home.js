const mongo = require('../utils/mongo');

const homeApi = {
	getHomeData: async () => {
		try {
			const mongoClient = await mongo.getClient();
			const dbo = mongoClient.db('sas');
			const data = await dbo.collection('home').find();
			return data;
		} catch (error) {
			throw new Error(error);
		}
	},
};

module.exports = homeApi;
