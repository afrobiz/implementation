list(req, res) {
  return recipe
    .all()
    .then(recipe => res.status(200).send(recipe))
    .catch(error => res.status(400).send(error));
},