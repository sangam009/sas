const getHomeDataApi = require('../../api/home');

const home = {
	getHomeData: async (req, res) => {
		const response = await getHomeDataApi.getHomeData();
		const finalresult = await response.toArray();
		res.json(finalresult);
	},
};

module.exports = home;
