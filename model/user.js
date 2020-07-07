var mongoose = require("mongoose");
var Schema = mongoose.Schema;
let userSchema = new Schema({
  id: Number,
  token: String,
  email: String,
  name: String,
  provider: String,
});

module.exports = mongoose.model("user", userSchema);
