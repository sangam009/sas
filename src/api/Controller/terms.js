const terms = require("../../model/terms");

function create(req, res, next) {
  console.log(`body data ${JSON.stringify(req.body)}`);
  const termsModel = new terms(req.body);
  termsModel
    .save()
    .then(() => res.json("terms saved successfully"))
    .catch(e => next(e));
}

function findAll(req, res, next) {
  terms
    .find({})
    .exec()
    .then(data => res.json(data))
    .catch(e => next(e));
}

module.exports = { create, findAll };
