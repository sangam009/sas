const mongoose = require("mongoose");

//keeping api flexible for about us page if we need any kind of change in future

const PrivacySchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model("privacy", PrivacySchema);
