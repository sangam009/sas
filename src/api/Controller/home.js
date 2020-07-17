const Home = require('../../model/Home');

function findAll(req, res, next) {
	Home.find({}).exec()
		.then((data) => res.json(data))
		.catch((e) => next(e));
}

function create(req, res, next) {
	console.log(`body data ${JSON.stringify(req.body)}`);
	const homeData = new Home(req.body);
	homeData.save()
		.then(() => res.json('successfully created'))
		.catch((e) => next(e));
}

module.exports = { findAll, create };
