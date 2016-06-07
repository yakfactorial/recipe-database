var express = require('express');
var router = express.Router();
var recipe = {
  name: this.name,
  servings: this.servings,
  cookTime: this.cookTime,
  ingredients: this.ingredients,
  directions: this.directions,
  source: this.source,
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Recipe Database'
  });
});

// router.get('', function(request, response){
//   response.render("", {
//     name: ,
//     servings: ,
//     cookTime: this.cookTime,
//     ingredients: this.ingredients,
//     directions: this.directions,
//     source: this.source,
//   })
// })

// Broccoli Cheddar Soup
//
// Instead of 1 cup half-and-half, you could use 1/2 cup milk + 1/2 cup heavy cream, 1/2 cup heavy cream + 1/2 cup additional stock or broth. I like to use both broccoli florets and stems when I cook, and I find that the stems cook up with the best texture and at the same rate as the florets when I peel them first. I did so here.
//
// Serves 4 to 6
//
// 4 tablespoons unsalted butter
// 1 small onion, chopped small
// 1 garlic clove, minced
// 1/4 cup all-purpose flour
// 1 cup half-and-half
// 4 cups low-sodium vegetable or chicken broth (here’s my favorite chicken stock)
// 1 bay leaf
// Kosher salt and freshly ground pepper
// 1 1/4 pounds broccoli or 4 cups broccoli florets and stems, chopped small
// 1 large carrot (about 6 ounces) or 2 slim ones, chopped tiny (1 cup)
// 8 ounces (about 2 1/2 cups) coarsely grated sharp cheddar cheese, plus a pinch extra for garnish
//
// Melt the butter in a large, heavy pot over medium heat. Add the onion and garlic and cook until tender, about 3 to 5 minutes. Stir in the flour and cook until golden, 3 to 4 minutes, then gradually whisk in the half-and-half until smooth. Add the chicken broth, bay leaf, salt and pepper and bring to a simmer. Reduce the heat to medium-low and cook, uncovered, stirring occasionally, until slightly thickened, about 10 minutes.
//
// Add the broccoli and carrot to the broth mixture and simmer until tender, about 15 to 20 minutes. Discard the bay leaf and adjust seasoning if needed, but err on the cautious side with the salt because the cheese will add a bit. Puree the soup to your desired texture — I like mine fairly chunky, just lightly blended — with an immersion blender or in an upright one. Back on the stove, add cheese and whisk until melted, about 1 minute.
//
// Serve in bowls, garnished with a pinch of cheese.

module.exports = router;
