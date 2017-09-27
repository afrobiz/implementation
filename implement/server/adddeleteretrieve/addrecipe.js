const recipe = require('../models').recipe;

module.exports = {
  create(req, res) {
    return recipe
      .create({
        title: req.body.title,
      })
      .then(recipe => res.status(201).send(recipe))
      .catch(error => res.status(400).send(error));
  },
};