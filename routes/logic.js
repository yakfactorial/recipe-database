// res.send to convert to JSON
// getRecipes('source') either db or file
// switch(source){case: 'file' return getRecipeFromFile(); case: 'database' return getRecipeFromDatabase();}

// function getRecipeFromFile(){};
// function getRecipeFromDatabase(){};

// function saveUserInput(){
//   var searchResults = document.getElementById(submit).value;
// };
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

var userInput = "";

function getSearchResults(){
  $.get( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});
}
