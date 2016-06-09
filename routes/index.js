var express = require('express');
var router = express.Router();
var fs = require('fs');
var recipes = require('./allRecipes.js');

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
    servings: recipes.broccoliCheddar.servings,
    cookTime: recipes.broccoliCheddar.cookTime,
    ingredients: recipes.broccoliCheddar.ingredients,
    directions: recipes.broccoliCheddar.directions,
    source: recipes.broccoliCheddar.source,
    tags: recipes.broccoliCheddar.tags,
    home: "/",
  })
});

router.get("/recipe/sangria", function(request, response){
  response.render("recipe", {
    name: recipes.sangria.name,
    servings: recipes.sangria.servings,
    cookTime: recipes.sangria.cookTime,
    ingredients: recipes.sangria.ingredients,
    directions: recipes.sangria.directions,
    source: recipes.sangria.source,
    tags: recipes.sangria.tags,
    home: "/",
  })
});

router.get("/recipe/hollandaise", function(request, response){
  response.render("recipe", {
    name: recipes.hollandaise.name,
    servings: recipes.hollandaise.servings,
    cookTime: recipes.hollandaise.cookTime,
    ingredients: recipes.hollandaise.ingredients,
    directions: recipes.hollandaise.directions,
    source: recipes.hollandaise.source,
    tags: recipes.hollandaise.tags,
    home: "/",
  })
});

router.get("/recipe/cacio-e-pepe-biscuits", function(request, response){
  response.render("recipe", {
    name: recipes.biscuits.name,
    servings: recipes.biscuits.servings,
    cookTime: recipes.biscuits.cookTime,
    ingredients: recipes.biscuits.ingredients,
    directions: recipes.biscuits.directions,
    source: recipes.biscuits.source,
    tags: recipes.biscuits.tags,
    home: "/",
  })
});

// gazpacho, mint juleps, enchiladas, crock pot stew, strawberry basil balsamic salad, southwest salad, strawberry rhubarb pie, old fashioneds, indian foods (cabbage dish and potato dish), kidney bean and chard pie, cabbage and portobello tacos, ramen, pear arugula and gorgonzola pizza

module.exports = router;
