const express = require('express');
const router = express.Router();
const Character = require('../models/Character')
const Equipment = require('../models/Equipment')

router.get('/', async(req, res) => {
    const characters = await Character.query();

    res.json(characters)
})

router.post('/', async(req, res) => {
    // creates a new character from the request body
    // only allows the character and creator fields for safety
    const newCharacter = req.body
  
    const character = await Character.query()
                           .allowInsert('[name, class]')
                           .insert(newCharacter)
  
    res.send(character)
});

router.get('/:id/equipments', async (req, res) => {
    // creates a new comment that is a child of an character, again sanitizes fields.
    const character = await Character.query().findById(req.params.id).eager('equipments');
  
    res.send(character)
});

router.post('/:id/equipments/:equipmentId', async (req, res) => {
    // creates a new comment that is a child of an character, again sanitizes fields.
    const character = await Character.query().findById(req.params.id)
    const equipment = await Equipment.query().findById(req.params.equipmentId)
  
    await character.$relatedQuery('equipments')
            .relate(equipment.id);
  
    res.send(character)
});

router.get('/:characterId', (req, res, next) => {
    res.status(200).json({
        message: 'character info',
        id: req.params.characterId
    });
});

router.delete('/:characterId', (req, res, next) => {
    res.status(204).json({
        message: 'character deleted succesfully'
    });
});

module.exports = router;