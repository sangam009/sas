const mongoose = require("mongoose");

//keeping api flexible for abou us page if we need any kind of change in future
//to show our achievemnets

const AboutUsSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model("aboutus", AboutUsSchema);
