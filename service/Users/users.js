const mongo = require("../../utils/mongo");
const user = require("../../model/user");

class Users {
  async createUser(userObj) {
    try {
      let mongoClient = await mongo.getClient();
      let modeltemp = new user(userObj);
      let done = await modeltemp.save();
      return done;
    } catch (error) {
      if (error.code == 11000) {
        console.log("user already exists");
        return userObj;
      } else {
        console.log(error.code);
        throw new Error(error);
      }
    }
  }

  async getUserBasedOnFilters(filter) {
    try {
      let mongoClient = await mongo.getClient();
      let done = await user.find(filter);
      return done;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = Users;
