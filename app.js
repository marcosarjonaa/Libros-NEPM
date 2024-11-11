/**
 * PROYECTO LIBROS NEPM
 */
const express = require('express');
const session = require('express-session');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const libreriaRouter = require('./routes/libreriaRoutes');


require('dotenv').config({ path: './libreria/.env' });

/**
 * Crea el servidor Web
 */
const app = express();
const port = process.env.SERVICE_PORT;
;
/**/