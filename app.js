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

const authRoutes = require('./routes/loginRoutes');
require('dotenv').config({ path: './libreria/.env' });

/**
 * Crea el servidor Web
 */
const app = express();
const port = process.env.SERVICE_PORT;

app.use(express.static('public'));

/**
 * Configuramos el motor de plantillas 
 * 
 */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Middleware para llevar la gestión de sesiones.
 * Si no hay sesión iniciada, arrancamos...
 */
app.use(session({
    secret: 'misupersecretoquenadiesabe',
    resave: true,
    saveUninitialized: false
}));

// cargarmos y configuramos el middleware para gestión de sesiones
app.use((req,res,next)=>{
    res.locals.currentUser = req.session.user;
    if (!req.session.user){        
        if (req.path.startsWith('/auth/login') ||
            req.path.startsWith('/auth/register')){
            // para hacer el GET/POST al login
            next();            
        } else {
            // cuando es una ruta distinta a login
            // me redirecciona al login
            return res.redirect('/auth/login');
        }
    } else {
        // ya estamos logeados        
        next();
    }
});
const authorize = (roles) => {
    return (req, res, next) => {
        const { user } = req.session;
        if (!user || !roles.includes(user.rol)) {
            return res.render('mensaje', {mensajePagina:'No tienes permiso para acceder a esta página.'});
        }
        next();
    };
};


//Delegamos todas las rutas
app.use('/auth', authRoutes);
app.use('/autor', autorRoutes);
app.use('/clientes', clientesRoutes);
app.use('/libros', libreriaRoutes);
app.use('/ventas', ventasRoutes);



app.get('/', (req, res) => {
    if (req.session.user)
        res.render('index', {user: req.session.user, titulo: 'Inicio'})
    else 
        res.redirect('/login')
});

//Cerrar sesion

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            console.error('Error al cerrar sesión:', err);
            return res.render('mensaje', {
                tituloPagina: 'Error al cerrar sesión. Intentalo de nuevo.'
            });
        }
        res.redirect('/auth/login')
    });
};


//Cargamos la página de bienvenida
app.get('/', (req, res) => {
    res.render('index')
    if (req.session.user)
        res.render('index', {user: req.session.user, titulo: 'Inicio'})
    else 
        res.redirect('/login')

});

/**
 * Siempre lo último que hacemos
 */
app.listen(
    port, () => {
        console.log(`Servidor iniciado en http://localhost:${port}`);
    });



    