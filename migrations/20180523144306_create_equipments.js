
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('equipments', table => {
            table.increments('id').primary()
            table.string('name')
            table.string('type')
            table.json('stats')
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('characters')
    ])
};
