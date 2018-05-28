
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {name: 1, class: 'one', level: 1},
        {name: 2, class: 'two', level: 1},
        {name: 3, class: 'three', level: 1}
      ]);
    });
};
