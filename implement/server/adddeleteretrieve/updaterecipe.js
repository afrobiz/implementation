update(req, res) {
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
      return recipe
        .update({
          title: req.body.title || recipe.title,
        })
        .then(() => res.status(200).send(recipe))  // Send back the updated recipe.
        .catch((error) => res.status(400).send(error));
    })
    .catch((error) => res.status(400).send(error));
},