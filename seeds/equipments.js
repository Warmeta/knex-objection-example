
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('equipments').del()
    .then(function () {
      // Inserts seed entries
      return knex('equipments').insert([
        {name: 1, type: '01', stats: {'dmg':1, 'armor': 0}},
        {name: 2, type: '02', stats: {'dmg':0, 'armor': 1}},
        {name: 3, type: '03', stats: {'dmg':1, 'armor': 1}}
      ]);
    });
};
