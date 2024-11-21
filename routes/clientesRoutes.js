const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Ruta para obtener la lista de clientes
router.get('/', clientesController.clientes);

// Rutas para añadir un cliente
router.get('/add', clientesController.clientesAddFormulario);
router.post('/add', clientesController.clientesAdd);

// Rutas para eliminar un cliente
router.get('/del/:id', clientesController.clientesDelFormulario);
router.post('/del/:id', clientesController.clientesDel);

// Rutas para editar un cliente
router.get('/edit/:id', clientesController.clientesEditFormulario);
router.post('/edit/:id', clientesController.clientesEdit);

//Maestro Detalle
router.get('/clientesNombre/:nombre', clientesController.clientesPorNombre)

module.exports = router;