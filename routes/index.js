var express = require('express');
var router = express.Router();
var fs = require('fs');
var recipes = require('./allRecipes.js');
var api = require('./api.js');

/* GET home page. */
router.get('/', (request, response, next) => {
  response.render('index', {
    title: "Recipe Database",
    next: 'recipe/broccoli-cheddar',
  })
})

router.get('/', function(error, request, response, next){
  res.json(api(request, response))
})

router.get('/recipe', (request, response, next) => {
  response.render('recipe', {
    title: "Recipe Database",
    next: 'recipe',
  })
})

// res.send to convert to JSON
// getRecipes('source') either db or file
// switch(source){case: 'file' return getRecipeFromFile(); case: 'database' return getRecipeFromDatabase();}

router.get('/recipe/broccoli-cheddar', (request, response) => {
  response.render('recipe', {
    name: recipes.broccoliCheddar.name,
    servings: recipes.broccoliCheddar.servings,
    cookTime: recipes.broccoliCheddar.cookTime,
    ingredients: recipes.broccoliCheddar.ingredients,
    directions: recipes.broccoliCheddar.directions,
    source: recipes.broccoliCheddar.source,
    tags: recipes.broccoliCheddar.tags,
    home: '/',
  })
});

router.get('/recipe/sangria', (request, response) => {
  response.render('recipe', {
    name: recipes.sangria.name,
    servings: recipes.sangria.servings,
    cookTime: recipes.sangria.cookTime,
    ingredients: recipes.sangria.ingredients,
    directions: recipes.sangria.directions,
    source: recipes.sangria.source,
    tags: recipes.sangria.tags,
    home: '/',
  })
});

router.get('/recipe/hollandaise', (request, response) => {
  response.render('recipe', {
    name: recipes.hollandaise.name,
    servings: recipes.hollandaise.servings,
    cookTime: recipes.hollandaise.cookTime,
    ingredients: recipes.hollandaise.ingredients,
    directions: recipes.hollandaise.directions,
    source: recipes.hollandaise.source,
    tags: recipes.hollandaise.tags,
    home: '/',
  })
});

router.get('/recipe/cacio-e-pepe-biscuits', (request, response) => {
  response.render('recipe', {
    name: recipes.biscuits.name,
    servings: recipes.biscuits.servings,
    cookTime: recipes.biscuits.cookTime,
    ingredients: recipes.biscuits.ingredients,
    directions: recipes.biscuits.directions,
    source: recipes.biscuits.source,
    tags: recipes.biscuits.tags,
    home: '/',
  })
});

// router.get('/recipe/indian-cauliflower', (request, response) => {
//   response.render('recipe', {
//     name: recipes.indianCauliflower.name,
//     servings: recipes.indianCauliflower.servings,
//     cookTime: recipes.indianCauliflower.cookTime,
//     ingredients: recipes.indianCauliflower.ingredients,
//     directions: recipes.indianCauliflower.directions,
//     source: recipes.indianCauliflower.source,
//     tags: recipes.indianCauliflower.tags,
//     home: '/',
//   })
// });

// gazpacho, mint juleps, enchiladas, crock pot stew, strawberry basil balsamic salad, southwest salad, strawberry rhubarb pie, old fashioneds, indian foods (cabbage dish and potato dish), kidney bean and chard pie, cabbage and portobello tacos, ramen, pear arugula and gorgonzola pizza

module.exports = router;
