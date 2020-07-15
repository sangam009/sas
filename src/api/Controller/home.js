const Home = require('../../model/Home');

function findAll(req, res, next) {
	Home.find().exec()
		.then((data) => res.json(data))
		.catch((e) => next(e));
}

module.exports = { findAll };
