const express = require('express');
const { getAllAutos, createAutos, updateAutosById, deleteAutosById } = require('../controllers/autosController');

const autosRouter = express.Router();

autosRouter.get('/obtener-autos', getAllAutos);
autosRouter.post('/crear-autos', createAutos);
autosRouter.put('/actualizar-autos', updateAutosById);
autosRouter.delete('/borrar-autos', deleteAutosById);

module.exports = autosRouter;