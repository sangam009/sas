const ContactUs = require('../../model/ContactUs');

function create(req, res, next) {
	console.log(`body data ${JSON.stringify(req.body)}`);
	const contactUs = new ContactUs(req.body);
	contactUs.save()
		.then(() => res.json('Thank you for reaching us.We will reach you shortly'))
		.catch((e) => next(e));
}

function findAll(req, res, next) {
	ContactUs.find({}).exec()
		.then((data) => res.json(data))
		.catch((e) => next(e));
}

module.exports = { create, findAll };
