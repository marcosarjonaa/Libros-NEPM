const db = require('../db'); // Conexión a la base de datos

// Obtener la lista de libros
exports.libros = (req, res) => {
  db.query('SELECT * FROM `libros`', (err, response) => {
    if (err) res.send('ERROR al hacer la consulta');
    else res.render('libros/list', { libros: response });
  });
};

// Formulario para añadir un libro
exports.libroAddFormulario = (req, res) => {
  res.render('libros/add');
};

// Añadir un nuevo libro
exports.libroAdd = (req, res) => {
  const { titulo, fPublicacion, precio } = req.body;
  db.query(
    'INSERT INTO libros (titulo, fPublicacion, precio) VALUES (?, ?, ?)',
    [titulo, fPublicacion, precio],
    (error, respuesta) => {
      if (error) res.send('ERROR INSERTANDO libro: ' + error);
      else res.redirect('/libros');
    }
  );
};

// Formulario para eliminar un libro
exports.libroDelFormulario = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) res.send('PARAMETROS INCORRECTOS');
  else
    db.query('SELECT * FROM libros WHERE id=?', [id], (error, respuesta) => {
      if (error) res.send('Error al intentar borrar el libro');
      else {
        if (respuesta.length > 0) {
          res.render('libros/del', { libro: respuesta[0] });
        } else {
          res.send('Error al intentar borrar el libro, no existe');
        }
      }
    });
};

// Eliminar un libro
exports.libroDel = (req, res) => {
  const { id } = req.body;
  if (isNaN(id)) res.send('ERROR BORRANDO');
  else {
    db.query('DELETE FROM libros WHERE id=?', [id], (error) => {
      if (error) res.send('ERROR BORRANDO libro: ' + error);
      else res.redirect('/libros');
    });
  }
};

// Formulario para editar un libro
exports.libroEditFormulario = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) res.send('PARAMETROS INCORRECTOS');
  else
    db.query('SELECT * FROM libros WHERE id=?', [id], (error, respuesta) => {
      if (error) res.send('ERROR al INTENTAR ACTUALIZAR EL libro');
      else {
        if (respuesta.length > 0) {
          res.render('libros/edit', { libro: respuesta[0] });
        } else {
          res.send('ERROR al INTENTAR ACTUALIZAR EL libro, NO EXISTE');
        }
      }
    });
};

// Editar un libro
exports.libroEdit = (req, res) => {
  const { id, titulo, fPublicacion, precio } = req.body;

  if (isNaN(id)) {
    res.send('ERROR ACTUALIZANDO libro');
  } else {
    db.query(
      'UPDATE libros SET titulo = ?, fPublicacion = ?, precio = ? WHERE id = ?',
      [titulo, fPublicacion, precio, id],
      (error) => {
        if (error) {
          res.send('ERROR ACTUALIZANDO libro: ' + error);
        } else res.redirect('/libros');
      }
    );
  }
};
