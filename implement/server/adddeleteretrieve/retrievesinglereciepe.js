retrieve(req, res) {
  return recipe
    .findById(req.params.recipeId, {
      include: [{
        model: recipeItem,
        as: 'recipeItems',
      }],
    })
    .then(recipe => {
      if (!recipe) {
        return res.status(404).send({
          message: 'recipe Not Found',
        });
      }
      return res.status(200).send(recipe);
    })
    .catch(error => res.status(400).send(error));
},