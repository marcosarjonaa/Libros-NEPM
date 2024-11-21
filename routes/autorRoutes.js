const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController');

// Ruta para obtener la lista de autortes
router.get('/', autorController.autores);

// Rutas para añadir un autor
router.get('/add', autorController.autoresAddFormulario);
router.post('/add', autorController.autoresAdd);

// Rutas para eliminar un autor
router.get('/del/:id', autorController.autoresDelFormulario);
router.post('/del/:id', autorController.autoresDel);

// Rutas para editar un autor
router.get('/edit/:id', autorController.autoresEditFormulario);
router.post('/edit/:id', autorController.autoresEdit);

router.get('/autoresPorPais/:paisOrigen', autorController.autoresPorPais)

module.exports = router;