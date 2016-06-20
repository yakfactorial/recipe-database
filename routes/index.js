var express = require('express');
var router = express.Router();
var fs = require('fs');
var recipes = require('./allRecipes.js');
var api = require('./api.js');
require('./logic.js');
var knex = require('../db/knex');
require('dotenv').load();

// GET home page.
router.get('/', (request, response, next) => {
  response.render('index', {
    title: "Recipe Database",
    next: 'recipe/list-all',
  })
})

// GET api
router.get('/', (error, request, response, next) => {
  response.json(api(request, response))
})

// GET logic file
router.get('/logic', (error, request, response, next) => {
  response.json(api(request,response))
})

// GET recipe template page
router.get('/recipe', (request, response, next) => {
  response.render('recipe', {
    title: "Recipe Database",
    next: 'recipe',
  })
})

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

router.get('/recipe/indian-cauliflower', (request, response) => {
  response.render('recipe', {
    name: recipes.indianCauliflower.name,
    servings: recipes.indianCauliflower.servings,
    cookTime: recipes.indianCauliflower.cookTime,
    ingredients: recipes.indianCauliflower.ingredients,
    directions: recipes.indianCauliflower.directions,
    source: recipes.indianCauliflower.source,
    tags: recipes.indianCauliflower.tags,
    home: '/',
  })
});

router.get('/recipe/mint-julep', (request, response) => {
  response.render('recipe', {
    name: recipes.mintJulep.name,
    servings: recipes.mintJulep.servings,
    cookTime: recipes.mintJulep.cookTime,
    ingredients: recipes.mintJulep.ingredients,
    directions: recipes.mintJulep.directions,
    source: recipes.mintJulep.source,
    tags: recipes.mintJulep.tags,
    home: '/',
  })
});

router.get('/recipe/gazpacho', (request, response) => {
  response.render('recipe', {
    name: recipes.gazpacho.name,
    servings: recipes.gazpacho.servings,
    cookTime: recipes.gazpacho.cookTime,
    ingredients: recipes.gazpacho.ingredients,
    directions: recipes.gazpacho.directions,
    source: recipes.gazpacho.source,
    tags: recipes.gazpacho.tags,
    home: '/',
  })
});

router.get('/recipe/old-fashioned', (request, response) => {
  response.render('recipe', {
    name: recipes.oldFashioned.name,
    servings: recipes.oldFashioned.servings,
    cookTime: recipes.oldFashioned.cookTime,
    ingredients: recipes.oldFashioned.ingredients,
    directions: recipes.oldFashioned.directions,
    source: recipes.oldFashioned.source,
    tags: recipes.oldFashioned.tags,
    home: '/',
  })
});

router.get('/recipe/indian-lentils-cabbage', (request, response) => {
  response.render('recipe', {
    name: recipes.indianLentilsCabbage.name,
    servings: recipes.indianLentilsCabbage.servings,
    cookTime: recipes.indianLentilsCabbage.cookTime,
    ingredients: recipes.indianLentilsCabbage.ingredients,
    directions: recipes.indianLentilsCabbage.directions,
    source: recipes.indianLentilsCabbage.source,
    tags: recipes.indianLentilsCabbage.tags,
    home: '/',
  })
});

router.get('/recipe/bean-pot-pie', (request, response) => {
  response.render('recipe', {
    name: recipes.beanPotPie.name,
    servings: recipes.beanPotPie.servings,
    cookTime: recipes.beanPotPie.cookTime,
    ingredients: recipes.beanPotPie.ingredients,
    directions: recipes.beanPotPie.directions,
    source: recipes.beanPotPie.source,
    tags: recipes.beanPotPie.tags,
    home: '/',
  })
});

// enchiladas, crock pot stew, strawberry basil balsamic salad, southwest salad, strawberry rhubarb pie, cabbage and portobello tacos, ramen, pear arugula and gorgonzola pizza

module.exports = router;
