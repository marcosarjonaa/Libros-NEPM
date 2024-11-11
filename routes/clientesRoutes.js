const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Ruta para obtener la lista de libros
router.get('/', clientesController.clientes);

// Rutas para añadir un libro
router.get('/add', clientesController.clientesAddFormulario);
router.post('/add', clientesController.clientesAdd);

// Rutas para eliminar un libro
router.get('/del/:id', clientesController.clientesDelFormulario);
router.post('/del/:id', clientesController.clientesDel);

// Rutas para editar un libro
router.get('/edit/:id', clientesController.clientesEditFormulario);
router.post('/edit/:id', clientesController.clientesEdit);

module.exports = router;