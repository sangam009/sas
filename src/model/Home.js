const mongoose = require('mongoose');

// we want home API to be flexible 
// not validating any data type or model defination

const HomePageSchema = new mongoose.Schema({}, { strict: false });
module.exports = mongoose.model('homes', HomePageSchema);
