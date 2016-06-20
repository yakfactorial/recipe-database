// res.send to convert to JSON
// getRecipes('source') either db or file
// switch(source){case: 'file' return getRecipeFromFile(); case: 'database' return getRecipeFromDatabase();}

// function getRecipeFromFile(){};
// function getRecipeFromDatabase(){};

// get element by id, prevent default on submit, store search in local data(?), traverse through recipe object tags and name (loop through tags)
var $ = require('jQuery');

var tags = allRecipes[key].tags;
var names = allRecipes[key].name;

$(document).ready(function(){
  getsearchResults();
  findRecipeByName();
  findRecipeByTags();
});

function getSearchResults(userInput){
  $('#search_box').submit(function(event) {
    event.preventDefault();
    var userInput = $('#search_box').val();
    $("body").append("YOU SEARCHED WOWEE");
   localStorage.setItem('userInput', userInput);
 });
}

function findRecipeByTags(){
  for (key of allRecipes) {
    for (var i=0; i<tags.length; i++){
      if (userInput === tags[i]){
        return allRecipes[key];
      } else {
          return "Your search didn't match any results. Check your spelling, or input 'full list' to search the old-fashioned way (with your eyes)."
      }
    }
  }
}

function findRecipeByName(){
  for (key of allRecipes) {
    if (userInput === name){
      return allRecipes[key];
    } else {
      return "Your search didn't match any results. Check your spelling, or input 'full list' to search the old-fashioned way (with your eyes)."
    }
  }
}
