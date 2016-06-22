$(document).ready(() => {
  addEventListeners()
});

function addEventListeners(){
  $('form').submit((event) => {
  event.preventDefault();
  var userInput = $('#search_box').val();
  $.get('allRecipes', (data) => {
      filterRecipes(userInput, data);
      return data;
    })
  })
}

function filterRecipes(userInput, allRecipes){
  allRecipes.filter(function(recipe){
    var searchResults = recursiveSearch(recipe, userInput);
    return searchResults;
  })
}

function recursiveSearch (obj, searchString){

  if (typeof obj === "string"){
    return -1 !== obj.search(searchString)
  } else if (typeof obj === "number"){
    return -1 !== obj.toString().search(searchString)
  } else if (typeof obj === "object"){
    if (obj instanceof Array){
      for (var i = 0; i<obj.length; i++){
        if (recursiveSearch(obj[i], searchString)){
          return true
        }
      }
      return false;
    } else {
      for (var key in obj) {
        if (recursiveSearch(obj[key], searchString)){
          return true
        }
      }
      return false
    }
  }
}

// console.log(allRecipes.filter(function (recipe) {
//   return recursiveSearch(recipe, "cheese")
// }))
