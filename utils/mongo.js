var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
var mongoClient = undefined;

let mongo = {
  getClient: async () => {
    try {
      if (mongoClient && mongoClient.isConnected()) {
        return mongoClient;
      }
      mongoClient = await MongoClient.connect(url);
      return mongoClient;
    } catch (error) {
      console.log(error);
      throw new Error("unable to connect to the mongo db client");
    }
  }
};

module.exports = mongo;
