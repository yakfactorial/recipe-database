var allRecipes =
 $.get('/allRecipes', function(data){
  return data;
});

var userInput = () => $('#search_box').val();

$(document).ready(() => {
  getSearchResults(userInput);
});

function getSearchResults(userInput){
  $('#search_box').submit((event) => {
    event.preventDefault();
    recursiveSearch();
    console.log('your results went through');
 });
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

console.log(allRecipes.filter(function (recipe) {
  return recursiveSearch(recipe, "cheese")
}))
