const mongoose = require('mongoose');

const { Schema } = mongoose;
const QUERY_TYPE = ['demo', 'pricing', 'support', 'others'];
const ContactUsSchema = new Schema({
	name: {
		type: String,
		maxLength: 40,
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		trim: true,
		lowercase: true,
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],

	},
	contactNumber: {
		type: String,
		trim: true,
		match: [/^[1-9][0-9]{9}$/, 'The value of path {PATH} ({VALUE}) is not a valid mobile number.'],
	},
	queryType: {
		type: String,
		lowercase: true,
		required: [true, `Please specify your query type : ${QUERY_TYPE.toString()}`],
		enum: QUERY_TYPE,
	},
	query: {
		type: String,
		maxLength: 200,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('contactus', ContactUsSchema);
