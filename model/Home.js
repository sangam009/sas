const mongoose = require('mongoose');

const HomePageSchema = mongoose.Schema({
	title: String,
	priority: Number,
	type: String,
	data: [
		{
			url: String,
			title: String,
			imageUrl: String,
			description: String,
		},
	],
});

module.exports = mongoose.model('home', HomePageSchema);
