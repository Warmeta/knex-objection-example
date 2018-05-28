
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('characters', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('class')
      table.integer('level')
    })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('characters')
    ])
};
