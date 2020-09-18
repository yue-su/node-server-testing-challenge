
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gadgets').del()
    .then(function () {
      // Inserts seed entries
      return knex('gadgets').insert([
        {name: 'laptop'},
        {name: 'camera'},
        {name: 'tablet'}
      ]);
    });
};
