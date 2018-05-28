const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const characterRoutes = require('./routes/characters');
const equipmentRoutes = require('./routes/equipments');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access.Cotnrol-Allow-Origin', '*');
    res.header('Access.Cotnrol-Allow-Headers', 
            'Origin, X-Request-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access.Cotnrol-Allow-Methods', 'PUT, POST, DELETE, GET, PATCH');
        return res.status(200).json({});
    }
    next();
});

//Routes
app.use('/characters', characterRoutes);
app.use('/equipments', equipmentRoutes);

//Error Handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;