var mongoose = require("mongoose");
var Schema = mongoose.Schema;
let sessionSchema = new Schema({
  sessionId: String,
  userId: Number,
  provider: String,
  createdAt: Number,
  active: Boolean,
});

module.exports = mongoose.model("sessions", sessionSchema);
