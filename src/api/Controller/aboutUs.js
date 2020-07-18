const aboutUs = require("../../model/aboutUs");

function create(req, res, next) {
  console.log(`body data ${JSON.stringify(req.body)}`);
  const aboutUsModel = new aboutUs(req.body);
  aboutUsModel
    .save()
    .then(() => res.json("about us saved successfully"))
    .catch(e => next(e));
}

function findAll(req, res, next) {
  aboutUs
    .find({})
    .exec()
    .then(data => res.json(data))
    .catch(e => next(e));
}

module.exports = { create, findAll };
