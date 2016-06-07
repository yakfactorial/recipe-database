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

var broccoliCheddar = {
  name: "Broccoli Cheddar Soup",
  servings: "4 to 6",
  cookTime: ,
  ingredients: [
    "4 tablespoons unsalted butter",
    "1 small onion, chopped small",
    "1 garlic clove, minced",
    "1/4 cup all-purpose flour",
    "1 cup half-and-half",
    "4 cups low-sodium vegetable broth",
    "1 bay leaf",
    "4 cups broccoli florets and stems, chopped small",
    "1 large carrot or 2 slim ones, chopped tiny",
    "2 1/2 cups coarsely grated sharp cheddar cheese, plus a pinch extra for garnish",
    "Kosher salt and freshly ground pepper",
  ]
  directions: [
    "Melt the butter in a large, heavy pot over medium heat. Add the onion and garlic and cook until tender, about 3 to 5 minutes. Stir in the flour and cook until golden, 3 to 4 minutes, then gradually whisk in the half-and-half until smooth. Add the chicken broth, bay leaf, salt and pepper and bring to a simmer. Reduce the heat to medium-low and cook, uncovered, stirring occasionally, until slightly thickened, about 10 minutes.",
    "Add the broccoli and carrot to the broth mixture and simmer until tender, about 15 to 20 minutes. Discard the bay leaf and adjust seasoning if needed, but err on the cautious side with the salt because the cheese will add a bit. Puree the soup to your desired texture — I like mine fairly chunky, just lightly blended — with an immersion blender or in an upright one. Back on the stove, add cheese and whisk until melted, about 1 minute.",
    "Serve in bowls, garnished with a pinch of cheese.",
  ]
  source: "http://smittenkitchen.com/blog/2015/09/broccoli-cheddar-soup/",
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Recipe Database'
  });
});

router.get('/broccoli-cheddar-soup', function(request, response){
  response.render("", {
    name: broccoliCheddar.name,
    servings: broccoliCheddar.servings,
    cookTime: broccoliCheddar.cookTime,
    ingredients: broccoliCheddar.ingredients,
    directions: broccoliCheddar.directions,
    source: broccoliCheddar.source,
    home: "/",
})

// gazpacho, mint juleps, enchiladas, crock pot stew, strawberry basil balsamic salad, southwest salad, strawberry rhubarb pie, old fashioneds, indian foods (cabbage dish and potato dish), kidney bean and chard pie

module.exports = router;
