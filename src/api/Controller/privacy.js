const privacy = require("../../model/privacy");

function create(req, res, next) {
  console.log(`body data ${JSON.stringify(req.body)}`);
  const privacyModel = new privacy(req.body);
  privacyModel
    .save()
    .then(() => res.json("privacy saved successfully"))
    .catch(e => next(e));
}

function findAll(req, res, next) {
  privacy
    .find({})
    .exec()
    .then(data => res.json(data))
    .catch(e => next(e));
}

module.exports = { create, findAll };
