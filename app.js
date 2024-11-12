/**
 * PROYECTO LIBROS NEPM
 */
const express = require('express');
const session = require('express-session');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const libreriaRoutes = require('./routes/libreriaRoutes');
const autorRoutes = require('./routes/autorRoutes');
const clientesRoutes = require('./routes/clientesRoutes');
const ventasRoutes = require('./routes/ventasRoutes');

require('dotenv').config({ path: './libreria/.env' });

/**
 * Crea el servidor Web
 */
const app = express();
const port = process.env.SERVICE_PORT;
;
/**

/**
 * Configuramos el motor de plantillas 
 * 
 */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Delegamos todas las rutas que comienzan por alumnos, asignaturas, etc.
 * al enrutador correspondiente
 */
app.use('/libros', libreriaRoutes);
app.use('/autor', autorRoutes);
app.use('clientes', clientesRoutes);
app.use ('ventas',ventasRoutes);

app.get('/', (req, res) => {
    res.render('index')
});



/**
 * Siempre lo último que hacemos
 */
app.listen(
    port, () => {
        console.log(`Servidor iniciado en http://localhost:${port}`);
    });
