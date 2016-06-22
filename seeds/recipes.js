
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        table.increments();
        table.text('slug');
        table.text('name');
        table.text('servings');
        table.text('cookTime');
        table.text('ingredients');
        table.text('directions');
        table.text('tags');
        table.text('source');
        knex('table_name').insert({id: 1, colName: 'rowValue1'}),
        knex('table_name').insert({id: 2, colName: 'rowValue2'}),
        knex('table_name').insert({id: 3, colName: 'rowValue3'})
      ]);
    });
};
