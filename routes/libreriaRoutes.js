const express = require('express');
const router = express.Router();
const libreriaController = require('../controllers/libroController');

// Ruta para obtener la lista de libros
router.get('/', libreriaController.libros);

// Rutas para añadir un libro
router.get('/add', libreriaController.libroAddFormulario);
router.post('/add', libreriaController.libroAdd);

// Rutas para eliminar un libro
router.get('/del/:id', libreriaController.libroDelFormulario);
router.post('/del/:id', libreriaController.libroDel);

// Rutas para editar un libro
router.get('/edit/:id', libreriaController.libroEditFormulario);
router.post('/edit/:id', libreriaController.libroEdit);


module.exports = router;
