
exports.up = function(knex, Promise) {
  return knex.schema.createTable('places', function(table){
    table.increments();
    table.string('name');
    table.string('city');
    table.string('state');
    table.string('cuisine');
    table.string('rating');
    table.string('img');
    table.text('bio');

  })
};

exports.down = function(knex, Promise) {
  //for deleting the table
};
