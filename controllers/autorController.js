const db = require('../db'); // Conexión a la base de datos

// Obtener la lista de autor
exports.autores = (req, res) => {
  db.query('SELECT * FROM `autores`', (err, response) => {
    if (err) res.send('ERROR al hacer la consulta');
    else res.render('autores/list', { autores: response });
  });
};

// Formulario para añadir un autor
exports.autoresAddFormulario = (req, res) => {
  res.render('autores/add');
};

// Añadir un nuevo autor
exports.autoresAdd = (req, res) => {
  const { nombre, correo } = req.body;
  db.query(
    'INSERT INTO autores (nombre, paisOrigen) VALUES (?, ?)',
    [nombre, paisOrigen],
    (error, respuesta) => {
      if (error) res.send('ERROR INSERTANDO autores: ' + error);
      else res.redirect('/autores');
    }
  );
};

// Formulario para eliminar un autor
exports.autoresDelFormulario = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) res.send('PARAMETROS INCORRECTOS');
  else
    db.query('SELECT * FROM autores WHERE id=?', [id], (error, respuesta) => {
      if (error) res.send('Error al intentar borrar el autor');
      else {
        if (respuesta.length > 0) {
          res.render('autores/del', { libro: respuesta[0] });
        } else {
          res.send('Error al intentar borrar el cliente, no existe');
        }
      }
    });
};

// Eliminar un autor
exports.autoresDel = (req, res) => {
  const { id } = req.body;
  if (isNaN(id)) res.send('ERROR BORRANDO');
  else {
    db.query('DELETE FROM autores WHERE id=?', [id], (error) => {
      if (error) res.send('ERROR BORRANDO autores: ' + error);
      else res.redirect('/autores');
    });
  }
};

// Formulario para editar un autor
exports.autoresEditFormulario = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) res.send('PARAMETROS INCORRECTOS');
  else
    db.query('SELECT * FROM autores WHERE id=?', [id], (error, respuesta) => {
      if (error) res.send('ERROR al INTENTAR ACTUALIZAR EL autores');
      else {
        if (respuesta.length > 0) {
          res.render('autores/edit', { libro: respuesta[0] });
        } else {
          res.send('ERROR al INTENTAR ACTUALIZAR EL autores, NO EXISTE');
        }
      }
    });
};

// Editar un autor
exports.autoresEdit = (req, res) => {
  const { id, nombre, paisOrigen } = req.body;

  if (isNaN(id)) {
    res.send('ERROR ACTUALIZANDO libro');
  } else {
    db.query(
      'UPDATE autores SET nombre = ?, paisOrigen = ? WHERE id = ?',
      [nombre, paisOrigen, id],
      (error) => {
        if (error) {
          res.send('ERROR ACTUALIZANDO autores: ' + error);
        } else res.redirect('/autores');
      }
    );
  }
};
