# Proyecto NEPM Libro
### Hecho por Marcos Arjona y Daniel Cornejo

---

### 1º Instalar dependencias
Hemos instalado las dependencias correspondientes en el package.json a través de estos comandos: 

```bash 
npm install --save body-parser
npm install --save dotenv
npm install --save express
npm install --save express-session
npm install --save mysql2
npm install --save pug
```

Y en el archivo 'package.json' se vería asi: 
```json
{
  "dependencies": {
    "body-parser": "^1.20.3",
    "dotenv": "^16.4.5",
    "express": "^4.21.1",
    "express-session": "^1.18.1",
    "mysql2": "^3.11.4",
    "pug": "^3.0.3"
  }
}
```
### 2º Creamos las carpetas: controllers, routes y biblioteca.

La carpeta libreria contendrá un archivo docker-compose.yml que se verá de la siguiente manera: 


````yml

version: '3.1'

services:

  adminer:
    image: adminer
    restart: "no"
    ports:
      - ${ADMINER_PORT}:8080

  db-gesaca:
    image: mysql:latest
    restart: "no"
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    ports:
      - ${MYSQL_PORT}:3306
    volumes:
      - ./scripts:/docker-entrypoint-initdb.d

````
### 3º BASE DE DATOS

Además la carpeta librería también contendrá otra carpeta llamada scripts en la cual habrá un archivo llamado initdb.sql donde se iniciará nuestra base de datos creando las tablas e insertando los datos, el archivo se ve de esta manera:


```sql
CREATE DATABASE IF NOT EXISTS `libreria`;

USE `libreria`;

DROP TABLE IF EXISTS libros;
DROP TABLE IF EXISTS autores;
DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS clientes;
DROP TABLE IF EXIST ventas_libros

-- para los logins 
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO `users` (`username`, `password`)
	VALUES ('pepe', 'Secreto_123');

CREATE TABLE libros (
	id INT AUTO_INCREMENT PRIMARY KEY, 
	titulo VARCHAR(25) NOT NULL, 
	fPublicacion DATE NOT NULL, 
	precio DECIMAL(10, 2) NOT NULL
);

CREATE TABLE autores (
	id INT AUTO_INCREMENT PRIMARY KEY, 
	nombre VARCHAR(25) NOT NULL , 
	paisOrigen VARCHAR(50) NOT NULL );

    	
CREATE TABLE clientes (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL,
	correo VARCHAR(100) NOT NULL
);


CREATE TABLE venta (
	id INT AUTO_INCREMENT PRIMARY KEY,
	fecha DATE NOT NULL,
	total DECIMAL(10, 2) NOT NULL
);

CREATE TABLE venta_libro (
	id_venta INT NOT NULL,
	id_libro INT NOT NULL,
	PRIMARY KEY (id_venta, id_libro),
	FOREIGN KEY (id_venta) REFERENCES venta(id),
	FOREIGN KEY (id_libro) REFERENCES libros(id)
);


-- para que los acentos salgan bien
SET NAMES utf8mb4;

/**
INSERTS DE LA TABLA AUTORES
*/
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Ana', 'USA');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Sofía', 'Spain');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('María', 'Spain');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Luis', 'Spain');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('José', 'USA');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Carlos', 'USA');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Sofía', 'Spain');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('María', 'México');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('José', 'México');
INSERT INTO `autores` (`nombre`,`paisOrigen`) VALUES ('Sofía', 'USA');

/**
INSERTS DE LA TABLA LIBROS
*/


INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro1', '2012-12-08', '35.65');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro2', '2006-01-02', '97.37');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro3', '2020-11-18', '87.73');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro4', '2007-09-24', '22.37');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro5', '1997-09-27', '68.97');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro6', '2005-05-24', '96.48');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro7', '2014-05-21', '83.46');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro8', '2021-06-12', '47.42');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro9', '1998-01-07', '60.28');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro10', '2014-02-11', '10.53');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro11', '2001-01-19', '76.03');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro12', '1993-07-01', '22.45');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro13', '2020-02-27', '23.91');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro14', '1990-03-11', '51.75');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro15', '2011-04-28', '18.96');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro16', '1990-11-15', '31.3');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro17', '2007-09-24', '12.16');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro18', '2012-10-09', '25.92');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro19', '2002-09-29', '20.67');
INSERT INTO `libros` (`titulo`, `fPublicacion`, `precio`) VALUES ('Libro20', '2001-04-19', '66.88');

/*
INSERTS TABLA CLIENTES
*/

INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('Sofia', 'cliente1@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('Lucía', 'cliente2@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('José', 'cliente3@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('María', 'cliente4@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('John', 'cliente5@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('José', 'cliente6@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('Sofia', 'cliente7@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('María', 'cliente8@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('Sofia', 'cliente9@correo.com');
INSERT INTO `clientes` (`nombre`, `correo`) VALUES ('Carlos', 'cliente10@correo.com');


/**
INSERTS TABLA VENTAS
*/

INSERT INTO `venta` (`fecha`, `total`) VALUES ('2017-02-23', '45.72');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2012-03-10', '125.68');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2015-12-29', '118.80');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2022-01-01', '180.21');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2009-08-25', '261.00');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2018-06-23', '279.77');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2019-09-14', '66.72');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2007-06-29', '244.26');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2011-06-19', '161.50');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2002-03-26', '117.89');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('1991-01-15', '219.33');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2014-07-30', '155.37');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2008-11-26', '70.56');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('2003-07-29', '109.30');
INSERT INTO `venta` (`fecha`, `total`) VALUES ('1991-05-27', '257.80');


```

Sobre las carpetas routes y controllers crearemos dos archivos .js llamados libreriaRoutes.js y libreriaControllers.js respectivamente.

### 4º Routes y Controllers

Hemos creado los routes tanto de libreria, ventas, autor, clientes. En estos archivos hemos seguido la estructura de los routes y controllers del proyecto NEPM que hicimos con anteriordad, hemos cambiado los nombres para que concuerde con el routes que toque y con los controllers igualmente: 

**Estructura del Routes**
```js 
const express = require('express');
const router = express.Router();
const nombreDelController = require('../controllers/nombreDelController');

// Ruta para obtener 
router.get('/', nombreDelController.MetodoDelController);

// Rutas para añadir 
router.get('/add', nombreDelController.MetodoDelController);
router.post('/add', nombreDelController.MetodoDelController);

// Rutas para eliminar
router.get('/del/:id', nombreDelController.MetodoDelController);
router.post('/del/:id', nombreDelController.MetodoDelController);

// Rutas para editar 
router.get('/edit/:id', nombreDelController.MetodoDelController);
router.post('/edit/:id', nombreDelController.MetodoDelController);

module.exports = router;

```

El listado de los métodos que vamos a usar en cada controller son: 
|Función|Código|Explicación|
|---|---|---|
|.get(/)|exports.x| Hace un select que coge todo lo necesario |
|.get(/add)|exports.xAddFormulario| Envía a x/add |
|.post(/add)|exports.xAdd| Hace un insert con  los datos necesarios pasados con anterioridad |
|.get(/del)|exports.xDelFormulario| Envía a x/del |
|.post(/del)|exports.xDel| Hace un delete segun el id comprobando que los datos sean correctos y que la persona exista |
|.get(/edit)|exports.xEditFormulario| Hace una comprabación de existencia de tabla y si no hay fallos de ningún tipo lo manda a edit  |
|.post(/edit)|exports.xEdit| Hace un update con todos los cambios necesarios |



**Estructura del Controller**
```js
const db = require('../db'); // Conexión a la base de datos

// Obtener la lista de 
exports.metodo = (req, res) => {
  db.query('SELECT * FROM `tabla`', (err, response) => {
    if (err) res.send('ERROR al hacer la consulta');
    else res.render('tabla/list', { tabla: response });
  });
};

// Formulario para añadir un 
exports.metodo = (req, res) => {
  res.render('tabla/add');
};

// Añadir un nuevo 
exports.metodo = (req, res) => {
  const { param, param, param } = req.body;
  db.query(
    'INSERT INTO tabla (param, param, param) VALUES (?, ?, ?)',
    [param, param, param],
    (error, respuesta) => {
      if (error) res.send('ERROR INSERTANDO libro: ' + error);
      else res.redirect('/tabla');
    }
  );
};

// Formulario para eliminar un
exports.metodo = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) res.send('PARAMETROS INCORRECTOS');
  else
    db.query('SELECT * FROM tabla WHERE id=?', [id], (error, respuesta) => {
      if (error) res.send('Error al intentar borrar el ');
      else {
        if (respuesta.length > 0) {
          res.render('tabla/del', { libro: respuesta[0] });
        } else {
          res.send('Error al intentar borrar , no existe');
        }
      }
    });
};

// Eliminar un 
exports.metodo = (req, res) => {
  const { id } = req.body;
  if (isNaN(id)) res.send('ERROR BORRANDO');
  else {
    db.query('DELETE FROM tabla WHERE id=?', [id], (error) => {
      if (error) res.send('ERROR BORRANDO param de Tabla: ' + error);
      else res.redirect('/libros');
    });
  }
};

// Formulario para editar un 
exports.metodo = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) res.send('PARAMETROS INCORRECTOS');
  else
    db.query('SELECT * FROM tabla WHERE id=?', [id], (error, respuesta) => {
      if (error) res.send('ERROR al INTENTAR ACTUALIZAR la tabla');
      else {
        if (respuesta.length > 0) {
          res.render('tabla/edit', { libro: respuesta[0] });
        } else {
          res.send('ERROR al INTENTAR ACTUALIZAR la tabla, NO EXISTE');
        }
      }
    });
};

// Editar un libro
exports.metodo = (req, res) => {
  const { param, param, param, param } = req.body;

  if (isNaN(id)) {
    res.send('ERROR ACTUALIZANDO tabla');
  } else {
    db.query(
      'UPDATE nombreTabla SET param = ?, param = ?, param = ? WHERE id = ?',
      [param, param, param, id],
      (error) => {
        if (error) {
          res.send('ERROR ACTUALIZANDO cosa: ' + error);
        } else res.redirect('/cosa');
      }
    );
  }
};

```
### 5º Crear la carpeta views

Desde la carpeta raíz creamos una carpeta llamada views, dentro de ella vamos a añadir los diferentes views que se verán en pantalla al ejecutar el app.js siendo en este caso: autor, clientes, libros y ventas; además de estos tenemos que crear también las carpetas: templates que contendrá una serie de pugs para el formato y una css que contendrá una hoja de estilos; y para acabar un pug llamado index.pug. 

A continuación mostraré como se ve el index.pug ya que es extremadamente complicado y es fácil perderse (ironía):

```pug
extends templates/layout

block content
  
  h3 Bienvenido a Libreria Mardá
  p Seleccione una opción de la lista para continuar

```


### 6º Vista de los diferentes pugs:

#### Autor 
---
##### add.pug:
Haremos uso de form el cual accederá a la base de datos libreria, después haciendo uso de varios label (que contendran el campo especifico de la tabla) e imputs (que contendran el tipo de dato que se procesa), podremos añadir tantos autores como queramos rellenando los datos que se nos piden, en este caso el nombre y su país de origen 

```pug
extends ../templates/layout

block content 
    h3 Añadir un nuevo autor
        div 
            form(action="/libreria/add", method="post") 
                
                label(for="nombre") Nombre:
                input(type="text", name="nombre")
                br
                label(for="paisOrigen") Pais de origen:
                input(type="text", name="paisOrigen")                 
                br              
                input(type="submit", value="Enviar")

```

##### del.pug

```pug 
extends ../templates/layout

block content 
    h3 Borrar un autor
        div 
            form(method="post") 
    
                label(for="nombre") Nombre:
                input(type="text", name="nombre", value=`${autores.nombre}`,disabled)
                
                br
                label(for="paisOrigen") Fecha Publicacion:
                input(type="text", name="paisOrigen", value=`${autores.paisOrigen}`,disabled)
                                
                br
                input(type="hidden", name="id", value=`${autores.id}`)
                input(type="submit", value="Enviar")
```

##### edit.pug 

```pug
extends ../templates/layout

block content 
    h3 Editar un autor
        div 
            form(method="post") 
                label(for="nombre") Nombre:
                input(type="text", name="nombre", value=`${autores.nombre}`)
                
                br
                label(for="paisOrigen") Pais de Origen:
                input(type="date", name="paisOrigen", value=`${autores.paisOrigen}`)
                
                br
                input(type="hidden", name="id", value=`${autores.id}`)
                input(type="submit", value="Enviar")

```


##### list.pug

```pug 
extends ../templates/layout

block content

        div 
            h3 listado de libros
            table(border=1)
                thead 
                    tr
                        th id
                        th nombre
                        th paisOrigen
                        th borrar 
                        th editar
                tbody 
                    each autor in autores
                        tr 
                            td=autor.id
                            td=autor.nombre                        
                            td=autor.paisOrigen
                            td 
                                a(href=`/autores/del/${autor.id}`) borrar 
                            td 
                                a(href=`/autores/edit/${autor.id}`) editar 
            p 
                a(href="/autores/add") Añadir un autor nuevo
```


Para los pug de clientes, libros y ventas solo hay que modificar ligeramente los datos pero la estructura sigue siendo la misma mostrada anteriormente.

### 7º Primer Maestro detalle
En el list de clientes hemos planteado el maestro detalle para que podamos ver los clientes y toda su información según su nombre. 

Si hay 8 personas llamadas Laura , se mostrará la información de esas 8 personas. 

El código que hemos usado es en el clientesNombre.js o autorPorPais de clientes es: 

```pug       
    extends ../templates/layout

    block content
        div
            h3 Listado de clientes por nombre  
                each cliente in listaCliente
                    if cliente.nombre == nombre
                        #{cliente.nombre}
            div 
                form(id="clientesForm")
                    p Seleccione otro nombre para ver las id de las personas que coinciden: 
                    select.form-select(name="nombre" id="nombre") 
                        each cliente in listaTClientes
                            if cliente.nombre == nombre
                                option(value=`${cliente.nombre}` selected) #{cliente.nombre}
                            else 
                                option(value=`${cliente.nombre}`) #{cliente.nombre}
            br
            div
                table(class="table")
                    thead 
                        tr
                            th id
                            th nombre 
                            th correo
                    tbody 
                        each cliente in listaCliente
                            tr 
                                td=cliente.id
                                td=cliente.nombre                        
                                td=cliente.correo

        script(src="/js/clientes.js" type="text/javascript") 
```
Tambien hemos creado una ruta en el clientesRoutes.js que es:
```js
  router.get('/clientesPorNombre', clientesController.clientesPorNombres);
```

Y en el clientesController hemos puesto: 
```js
  exports.clientesPorNombre = (req, res) => {
  db.query(
    'SELECT * FROM `clientes` ',
    (error, listaTCliente) => {
      if (!error) {
        db.query(
          'SELECT * FROM `clientes` WHERE nombre = ? ',
          [req.params.nombre],
          (err, listaCliente) => {
            if (err) res.send('ERROR al hacer la consulta')
            else {
              res.render('clientes/clientesNombre',
                {
                  nombre: req.params.nombre,
                  listaCliente: listaCliente,
                  listaTClientes: listaTCliente
                })
            }
          }
        );
      } else {
        res.send('La asignatura no tiene alumnos matriculados');
      }
    }
  );
};
```

### 8º Segundo Maestro detalle

En el list de autores hemos planteado un maestro detalle que nos permita ver a los autores y toda su información según su país de origen.

Por ejemplo si hay 3 autores de Estados Unidos (USA) se mostrará la información de estos autores.

Para conseguir esto, en el controller de autores hemos añadido lo siguiente:
```js
//Maestro detalle autores 
exports.autoresPorPais = (req, res) => {
  db.query(
    'SELECT * FROM `autores`',
    (error, listaPautores) => {
      if (!error) {
        db.query('SELECT DISTINCT * FROM `autores` WHERE paisOrigen = ? ',
          [req.params.paisOrigen],
          (err, listaAutores) => {
            if (err) res.send('ERROR al hacer la consulta')
            else {
              res.render('autor/autorPorPais',
                {
                  paisOrigen: req.params.paisOrigen,
                  listaAutores: listaAutores,
                  listaPautores: listaPautores
                })
            }
          }
        );
      } else {
        res.send('No hay ningún autor');
      }
  }
);
}
```

También en el routes de autor hemos añadido lo siguiente:

```js
router.get('/autoresPorPais/:paisOrigen', autorController.autoresPorPais)
```

Y finalmente en un pug llamado autorPorPais hemos puesto lo siguiente:

```pug
 div
        h3 Listado de autores por país 
            each autor in listaAutores
                if autor.paisOrigen == paisOrigen
                    #{autor.paisOrigen}
        div 
            form(id="autorForm")
                p Seleccione otro país para ver las id de los autores que coinciden: 
                select.form-select(name="paisOrigen" id="paisOrigen") 
                    each autor in listaPautores
                        if autor.paisOrigen == paisOrigen
                            option(value=`${autor.paisOrigen}` selected) #{autor.paisOrigen}
                        else 
                            option(value=`${autor.paisOrigen}`) #{autor.paisOrigen}
        br
        div
            table
                thead 
                    tr
                        th id
                        th nombre 
                        th paisOrigen
                tbody 
                    each autor in listaAutores
                        tr 
                            td=autor.id
                            td=autor.nombre                        
                            td=autor.paisOrigen

    script(src="/js/autor.js" type="text/javascript") 
```
### 9º Adición de Bootstrap para mejorar el aspecto de la página

Para que todo se vea de una forma más bonita haremos uso de bootstrap para ello añadiremos lo siguiente en todos los pug:

```pug
block head
    link(rel="stylesheet", href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css")
    script(src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js")
    script(src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js")
    script(src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js")
```

También en las listas añadimos esto para que la tabla con la información se vea de una
forma elegante:

```pug
div.container.mt-4
        h3 Listado de clientes <!--Cambiar el nombre dependiendo de la lista -->
        table.table.table-bordered.table-hover
            thead.thead-dark 
```

Además para que los botones de Borrar, Editar y Maestro detalle se vean mejor aplicamos lo siguiente:

```pug
 td 
                            a.btn.btn-danger.btn-sm(href=`/clientes/del/${cliente.id}`) Borrar 
                        td 
                            a.btn.btn-warning.btn-sm(href=`/clientes/edit/${cliente.id}`) Editar
                        td 
                            a.btn.btn-info.btn-sm(href=`/clientes/clientesNombre/${cliente.nombre}`) Clientes por Nombre 
    p 
        a.btn.btn-primary(href="/clientes/add") Añadir un cliente nuevo
```

De aquí para el resto de listas solo hay que cambiar el nombre, por ejemplo para la de autores cambiaremos todas las partes en las que pone cliente, y así con las demás.

### 10º Adición del login

Para entrar a la página web hemos implementado un login que se mostrará al iniciar la aplicación, antes que nada para que todo funcione bien debemos encriptar las contraseñas haciendo uso de bycript, tendremos que instalar en nuestro proyecto esa dependencia poniendo lo siguiente en el terminal: 

```bash
npm install bcrypt
```

Tras eso añadiremos los pug login, register y mensaje en la carpeta views viendose de la siguiente manera:

  ## login.pug

  ```pug 
block content
    .container 
        h1 INICIA SESION 
        form(action="/auth/login", method="post") 
            
            label.form-label(for="username") Usuario
            input.form-control(type="text", name="username", id="username")
            br
            
            label.form-label(for="password") Contraseña
            input.form-control(type="password", name="password" id="password")
            br
            
            
            button.btn.btn-primary(type="submit") Sign in!
            
        p ¿Sin usuario? Regístrese 
            a(href="/auth/register") aquí.
  ```

  ## register.pug 

```pug
block content
    .container 
        h1 Alta en el sistema

        form.row.g-3(action="/auth/register", method="post") 
            
            .col-md-6
                label.form-label(for="username") Usuario
                input.form-control(type="text", name="username", id="username", required)
                label.form-label(for="password") Contraseña
                input.form-control(type="password", name="password" id="password", required)
                br            
            .col-12
            button.btn.btn-success(type="submit") Sign up!
```
## mensaje.pug

```bash
extends templates/layout

block content
    .container
        h3= mensajePagina 
        a(href="/") Volver al inicio
```

También necesitaremos añadir en la carpeta routes y controllers el apartado loginRoutes y loginControllers respectivamente

## loginRoutes.js
```js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/loginController');


router.get('/register', authController.registerForm);

router.post('/register', authController.register);

router.get('/login', authController.loginForm);

router.post('/login', authController.login);

router.get('/logout', authController.logout);

module.exports=router;

```
## loginController.js
```js
const bcrypt = require('bcrypt');
const db = require('../db');


exports.registerForm = (req, res) =>{
    res.render('register');
};

exports.register = (req, res) =>{
    const datosUsuario = req.body;
    datosUsuario.tipo='CLIENTE'
    datosUsuario.password= bcrypt.hashSync(datosUsuario.password, 10);
    try {
            // guardamos el usuario en la BBDD SIN ACTIVAR
        db.query(
            'INSERT INTO users (username, password, enabled, tipo) VALUES (?,?,?,?)',
            [datosUsuario.username, datosUsuario.password, 1, 'CLIENTE'],
            (error, respuesta) => {
                if (error) res.send('ERROR INSERTANDO usuario' + req.body)
                else res.render('mensaje', {tituloPagina:'Registro usuarios', mensajePagina: 'Usuario registrado'});
        }
      );                
    } catch (error) {
        res.render('mensaje', {tituloPagina:'ERROR', mensajePagina: 'Error ' + error});
    }   
};

exports.loginForm = (req, res) =>{
    res.render('login');
};

exports.login = (req, res)=>{
    const {username, password} = req.body;

    db.query(
        'SELECT * from users WHERE username=?',
        [username],
        (error, rsUsuario) => {
            if (error) {
                res.render('mensaje', {tituloPagina:'LOGIN', mensajePagina: 'Usuario no encontrado'});
            } else {
                const usuario = rsUsuario[0];
                if (usuario) {
                    if (usuario.enabled==1 && bcrypt.compareSync(password, usuario.password)){
                        req.session.user = usuario.username;
                        res.redirect('/');
                    } else {                       
                        res.render('mensaje', {tituloPagina:'LOGIN', mensajePagina: 'Usuario desactivado'});
                    }
                } else {
                    res.render('mensaje', {tituloPagina:'LOGIN', mensajePagina: 'Usuario no encontrado o credenciales inválidas'});
                }
            }
        }
    )    
};

exports.logout = (req, res)=>{
    req.session.destroy();
    res.redirect('/auth/login');
};

```
En la base de datos tendremos una tabla especifica para los users que pueden acceder al login viendose de la siguiente manera:

```sql
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL, 
  `enabled` BOOL,
  tipo ENUM('CLIENTE' , 'ADMIN') 
);
```

Y su respectivo Insert con una contraseña cifrada:


```sql
/**
INSERT TABLA USERS
*/
INSERT INTO `users` (`id`, `username`, `password`, `enabled`, `tipo`) VALUES
(1,	'marda',	'$2a$10$.1Op/U.7n9PoNLlcf1vN3O08N690kP/TBO5Pmj.P9k7IBmirB//cS',	1,	2);
```

USUARIO: marda
CONTRASEÑA: libreriamarda
### Hecho por Daniel Cornejo y Marcos Arjona 2ºDAM A