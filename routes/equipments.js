const express = require('express');
const router = express.Router();
const Character = require('../models/Character')
const Equipment = require('../models/Equipment')

router.get('/', (req, res) => {
    Equipment.query().then(equipment => {
        res.json(equipment)
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'equipment created'
    });
});

router.get('/:equipmentId', (req, res, next) => {
    res.status(200).json({
        message: 'equipment info',
        id: req.params.equipmentId
    });
});

router.delete('/:equipmentId', (req, res, next) => {
    res.status(204).json({
        message: 'equipment deleted succesfully'
    });
});

module.exports = router;