const mongo = require("../utils/mongo");
let homeApi = {
  getHomeData: async () => {
    try {
      let mongoClient = await mongo.getClient();
      let dbo = mongoClient.db("sas");
      let data = await dbo.collection("home").find();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
};

module.exports = homeApi;
