const Knex = require('knex')
const connection = require('../knexfile')
const { Model } = require('objection')
const Equipment = require('./Equipment')

const knexConnection = Knex(connection)

Model.knex(knexConnection)

class Character extends Model {
    static get tableName () {
      return 'characters'
    }
  
    static get relationMappings () {
      
      const Equipment = require('./Equipment')
      
      return {
        equipments: {
          relation: Model.ManyToManyRelation,
          modelClass: Equipment,
          join: {
            from: 'characters.id',
            through: {
                from: 'character_equipment.character_id',
                to: 'character_equipment.equipment_id'
            },
            to: 'equipments.id'
          }
        }
      }
    }
  }
  
  module.exports = Character;