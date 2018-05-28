const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')
const Character = require('./Character')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

class Equipment extends Model {
    static get tableName () {
      return 'equipments'
    }
  
    static get relationMappings () {

      const Character = require('./Character')

      return {
        characters: {
          relation: Model.ManyToManyRelation,
          modelClass: Character,
          join: {
            from: 'equipments.id',
            through: {
                from: 'character_equipment.equipment_id',
                to: 'character_equipment.character_id'
            },
            to: 'characters.id'
          }
        }
      }
    }
  }
  
  module.exports = Equipment;