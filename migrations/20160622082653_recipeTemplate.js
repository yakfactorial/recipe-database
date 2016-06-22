
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipeTemplate', function(table){
    table.increments();
    table.text('slug');
    table.text('name');
    table.text('servings');
    table.text('cookTime');
    table.text('ingredients');
    table.text('directions');
    table.text('tags');
    table.text('source');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('recipeTemplate')
};
