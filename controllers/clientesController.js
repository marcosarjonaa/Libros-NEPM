const db = require('../db'); // Conexión a la base de datos

// Obtener la lista de clientes
exports.clientes = (req, res) => {
  db.query('SELECT * FROM `clientes`', (err, response) => {
    if (err) res.send('ERROR al hacer la consulta');
    else res.render('clientes/list', { clientes: response });
  });
};

// Formulario para añadir un cliente
exports.clientesAddFormulario = (req, res) => {
  res.render('clientes/add');
};

// Añadir un nuevo cliente
exports.clientesAdd = (req, res) => {
  const { nombre, correo } = req.body;
  db.query(
    'INSERT INTO clientes (nombre, correo) VALUES (?, ?)',
    [nombre, correo],
    (error, respuesta) => {
      if (error) res.send('ERROR INSERTANDO clientes: ' + error);
      else res.redirect('/clientes');
    }
  );
};

// Formulario para eliminar un cliente
exports.clientesDelFormulario = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) res.send('PARAMETROS INCORRECTOS');
  else
    db.query('SELECT * FROM clientes WHERE id=?', [id], (error, respuesta) => {
      if (error) res.send('Error al intentar borrar el cliente');
      else {
        if (respuesta.length > 0) {
          res.render('clientes/del', { clientes: respuesta[0] });
        } else {
          res.send('Error al intentar borrar el cliente, no existe');
        }
      }
    });
};

// Eliminar un cliente
exports.clientesDel = (req, res) => {
  const { id } = req.body;
  if (isNaN(id)) res.send('ERROR BORRANDO');
  else {
    db.query('DELETE FROM clientes WHERE id=?', [id], (error) => {
      if (error) res.send('ERROR BORRANDO cliente: ' + error);
      else res.redirect('/clientes');
    });
  }
};

// Formulario para editar un libro
exports.clientesEditFormulario = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) res.send('PARAMETROS INCORRECTOS');
  else
    db.query('SELECT * FROM clientes WHERE id=?', [id], (error, respuesta) => {
      if (error) res.send('ERROR al INTENTAR ACTUALIZAR EL cliente');
      else {
        if (respuesta.length > 0) {
          res.render('clientes/edit', { clientes: respuesta[0] });
        } else {
          res.send('ERROR al INTENTAR ACTUALIZAR EL cliente, NO EXISTE');
        }
      }
    });
};

// Editar un cliente
exports.clientesEdit = (req, res) => {
  const { id, nombre, correo } = req.body;
  if (isNaN(id)) {
    res.send('ERROR ACTUALIZANDO cliente');
  } else {
    db.query(
      'UPDATE clientes SET nombre = ?, correo = ? WHERE id = ?',
      [nombre, correo, id],
      (error) => {
        if (error) {
          res.send('ERROR ACTUALIZANDO cliente: ' + error);
        } else res.redirect('/clientes');
      }
    );
  }
};

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
