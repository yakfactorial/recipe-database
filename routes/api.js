var allRecipes = require('./allRecipes.js');

module.exports = function(req, res) {
  return {allRecipes: allRecipes};
};


// loop through recipes 
// .find
// loop through allRecipes object and find things that match!
