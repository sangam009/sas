const getHomeDataApi = require("../../api/home");

let home = {
  getHomeData: async (req, res) => {
    let response = await getHomeDataApi.getHomeData();
    let finalresult = await response.toArray();
    res.json(finalresult);
  }
};

module.exports = home;
