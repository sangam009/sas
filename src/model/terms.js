const mongoose = require("mongoose");

//keeping api flexible for about us page if we need any kind of change in future

const TermsSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model("terms", TermsSchema);
