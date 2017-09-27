destroy(req, res) {
  return recipe
    .findById(req.params.recipeId)
    .then(recipe => {
      if (!recipe) {
        return res.status(400).send({
          message: 'recipe Not Found',
        });
      }
      return recipe
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
},