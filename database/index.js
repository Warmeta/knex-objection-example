const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'jose',
        password: 'secret',
        database: 'api-game'
    }
});

module.exports = {
    knex
};