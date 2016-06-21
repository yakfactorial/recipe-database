var express = require('express');
var router = express.Router();
var fs = require('fs');
var recipes = require('./allRecipes.js');
var api = require('./api.js');
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

// send allRecipes object
router.get('/allRecipes', (request, response, next) => {
  response.send(recipes)
})

// GET recipe template page
router.get('/recipe', (request, response, next) => {
  response.render('recipe', {
    title: "Recipe Database",
    next: 'recipe',
  })
})

function findRecipeByName(string){
  for(var i=0; i<allRecipes.length; i++){
    if (userInput === allRecipes[i].slug){
      return allRecipes[i];
    }
  } return {};
}

router.get('/recipe/:name', (request, response) => {
  response.render('recipe',
    findRecipeByName(request.params.name));
});

// enchiladas, crock pot stew, strawberry basil balsamic salad, southwest salad, strawberry rhubarb pie, cabbage and portobello tacos, ramen, pear arugula and gorgonzola pizza

module.exports = router;
