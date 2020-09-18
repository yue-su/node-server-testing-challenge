
exports.up = function(knex) {
  return knex.schema.createTable("gadgets", function (gadgets) {
    gadgets.increments()
    gadgets.string("name").notNullable().unique()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("gadgets")
};
