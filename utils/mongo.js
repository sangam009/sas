const mongoose = require("mongoose");

const url =
  process.env.MONGO_DB_URL ||
  "mongodb+srv://admin:admin@cluster0.gt5ch.gcp.mongodb.net/sas"; // 'mongodb://localhost:27017';
let mongoClient;

const mongo = {
  getClient: async () => {
    try {
      mongoClient = await mongoose.connect(url, {
        useNewUrlParser: true,
        poolSize: 5,
      });
      return mongoClient;
    } catch (error) {
      console.log(error);
      throw new Error("unable to connect to the mongo db client");
    }
  },
};

module.exports = mongo;
