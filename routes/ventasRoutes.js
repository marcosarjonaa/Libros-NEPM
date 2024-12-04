const express = require('express');
const router = express.Router();
const ventasController = require('../controllers/ventasController');

// Ruta para obtener la lista de libros
router.get('/', ventasController.ventas);

// Rutas para añadir un libro
router.get('/add', ventasController.ventasAddFormulario);
router.post('/add', ventasController.ventasAdd);

// Rutas para eliminar un libro
router.get('/del/:id', ventasController.ventasDelFormulario);
router.post('/del/:id', ventasController.ventasDel);

// Rutas para editar un libro
router.get('/edit/:id', ventasController.ventaEditFormulario);
router.post('/edit/:id', ventasController.ventaEdit);

module.exports = router;