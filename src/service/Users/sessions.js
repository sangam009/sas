// const sessions = require("../../model/sessions");
// const mongo = require("../../utils/mongo");

// class session {
//   async create(sessionObj) {
//     let mongoClient = await mongo.getClient();
//     let model = new sessions(sessionObj);
//     try {
//       let data = await model.save();
//       return data;
//     } catch (error) {
//       if (error.code == 11000) {
//         console.log("session already exists");
//         return sessionObj;
//       } else {
//         console.log(error.code);
//         throw new Error(error);
//       }
//     }
//   }

//   async get(filters) {
//     try {
//       let mongoClient = await mongo.getClient();
//       let done = await sessions.find(filter);
//       return done;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// }

// module.exports = session;
