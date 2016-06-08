var express = require('express');
var router = express.Router();

var broccoliCheddar = {
  name: "Broccoli Cheddar Soup",
  servings: "4 to 6",
  cookTime: "45 minutes, including prep",
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
  ],
  directions: [
    "Melt the butter in a large, heavy pot over medium heat. Add the onion and garlic and cook until tender, about 3 to 5 minutes. Stir in the flour and cook until golden, 3 to 4 minutes, then gradually whisk in the half-and-half until smooth. Add the chicken broth, bay leaf, salt and pepper and bring to a simmer. Reduce the heat to medium-low and cook, uncovered, stirring occasionally, until slightly thickened, about 10 minutes.",
    "Add the broccoli and carrot to the broth mixture and simmer until tender, about 15 to 20 minutes. Discard the bay leaf and adjust seasoning if needed, but err on the cautious side with the salt because the cheese will add a bit. Puree the soup to your desired texture. Back on the stove, add cheese and whisk until melted, about 1 minute.",
    "Serve in bowls, garnished with a pinch of cheese.",
  ],
  tags: [
    "freezer friendly",
    "fall",
    "winter",
    "broccoli",
    "cheddar",
    "soup",
  ],
  source: "http://smittenkitchen.com/blog/2015/09/broccoli-cheddar-soup/",
};

var gazpacho = {
  name: "Gazpacho",
  servings: "",
  cookTime: "",
  ingredients: [

  ],
  directions: [

  ],
  tags: [
    "summer",
    "lunch",
    "dinner",
    "soup",
  ],
  source: "",
};

var hollandaise = {
  name: "Hollandaise Sauce",
  servings: "6",
  cookTime: "10 minutes",
  ingredients: [
    "3 egg yolks",
    "1/2 lemon, juiced",
    "1 tsp. cold water",
    "1/2 c. butter",
    "salt and pepper to taste",
  ],
  directions: [
    "In a small bowl, whisk together egg yolks, lemon juice, cold water, salt and pepper. Melt butter in a saucepan over low heat. Do not let the butter boil, or the sauce will separate and become chunky. Gradually whisk yolk mixture into butter. Continue whisking over low heat for 8 minutes, or until sauce is thickened. Serve immediately. If the sauce is separating, add a splash of very cold water and whisk quickly until smooth."
  ],
  tags: [
    "breakfast",
    "sauce",
    "hollandaise",
  ],
  source: "http://allrecipes.com/recipe/35995/classic-hollandaise-sauce/",
};

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Recipe Database",
    next: "/recipe",
  })
})

// res.send to convert to JSON
// getRecipes("source") either db or file
// switch(source){case: "file" return getRecipeFromFile(); case: "database" return getRecipeFromDatabase();}

router.get("/recipe/broccoli-cheddar", function(request, response){
  response.render("recipe", {
    name: "Broccoli Cheddar Soup",
    servings: broccoliCheddar.servings,
    cookTime: broccoliCheddar.cookTime,
    ingredients: broccoliCheddar.ingredients,
    directions: broccoliCheddar.directions,
    source: broccoliCheddar.source,
    tags: broccoliCheddar.tags,
    home: "/",
  })
});

router.get("/recipe/gazpacho", function(request, response){
  response.render("recipe", {
    name: gazpacho.name,
    servings: gazpacho.servings,
    cookTime: gazpacho.cookTime,
    ingredients: gazpacho.ingredients,
    directions: gazpacho.directions,
    source: gazpacho.source,
    tags: gazpacho.tags,
    home: "/",
  })
});

router.get("/recipe/hollandaise", function(request, response){
  response.render("recipe", {
    name: hollandaise.name,
    servings: hollandaise.servings,
    cookTime: hollandaise.cookTime,
    ingredients: hollandaise.ingredients,
    directions: hollandaise.directions,
    source: hollandaise.source,
    tags: hollandaise.tags,
    home: "/",
  })
});
// gazpacho, mint juleps, enchiladas, crock pot stew, strawberry basil balsamic salad, southwest salad, strawberry rhubarb pie, old fashioneds, indian foods (cabbage dish and potato dish), kidney bean and chard pie, cabbage and portobello tacos, sangria with ginger and cardamom, hollandaise sauce

module.exports = router;
