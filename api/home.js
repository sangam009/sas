const mongo = require('../utils/mongo');

const homeApi = {
	getHomeData: async () => {
		try {
			const db = await mongo.getClient();
			return await db.collection('home').find();
		} catch (error) {
			throw new Error(error);
		}
	},
};

module.exports = homeApi;
