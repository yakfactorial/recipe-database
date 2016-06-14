require file('allRecipes.js')

exports.name = (req, res) => {
  res.json({
    allRecipes: allRecipes,
  });
};
