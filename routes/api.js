var allRecipes = require('./allRecipes.js');

module.exports = function(req, res) {
  return {allRecipes: allRecipes};
};
