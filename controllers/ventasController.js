const db = require('../db'); // Conexión a la base de datos
const moment = require('moment'); 

// Obtener la lista de ventas
exports.ventas = (req, res) => {
  db.query('SELECT * FROM `venta`', (err, response) => {
    if (err) res.send('ERROR al hacer la consulta');
    else {
      response.forEach(venta => {
        if (venta.fecha) { 
          venta.fecha = moment(venta.fecha).format('YYYY-MM-DD');
        }
      });
      res.render('venta/list', { venta: response });
    }
  });
};

// Formulario para añadir una venta
exports.ventasAddFormulario = (req, res) => {
  res.render('venta/add');
};

// Añadir una nueva venta
exports.ventasAdd = (req, res) => {
  const { fecha, total } = req.body;
  db.query(
    'INSERT INTO venta (fecha, total) VALUES (?, ?)',
    [fecha, total],
    (error, respuesta) => {
      if (error) res.send('ERROR INSERTANDO venta: ' + error);
      else res.redirect('/venta');
    }
  );
};

// Formulario para eliminar una venta
exports.ventasDelFormulario = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) res.send('PARAMETROS INCORRECTOS');
  else
    db.query('SELECT * FROM venta WHERE id=?', [id], (error, respuesta) => {
      if (error) res.send('Error al intentar borrar el cliente');
      else {
        if (respuesta.length > 0) {
          const venta = respuesta[0];
          if (venta.fecha) {
            venta.fecha = moment(venta.fecha).format('YYYY-MM-DD');
          }
          res.render('venta/del', { venta: respuesta[0] });
        } else {
          res.send('Error al intentar borrar la venta, no existe');
        }
      }
    });
};

// Eliminar una venta
exports.ventasDel = (req, res) => {
  const { id } = req.body;
  if (isNaN(id)) res.send('ERROR BORRANDO');
  else {
    db.query('DELETE FROM venta WHERE id=?', [id], (error) => {
      if (error) res.send('ERROR BORRANDO venta: ' + error);
      else res.redirect('/ventas');
    });
  }
};

// Formulario para editar una venta
exports.ventaEditFormulario = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    res.send('PARAMETROS INCORRECTOS');
  } else {
    db.query('SELECT * FROM venta WHERE id=?', [id], (error, respuesta) => {
      if (error) {
        res.send('ERROR al INTENTAR ACTUALIZAR LA venta');
      } else {
        if (respuesta.length > 0) {
          const venta = respuesta[0];
          // Asegúrate de que la fecha esté en el formato correcto
          if (venta.fecha) {
            venta.fecha = moment(venta.fecha).format('YYYY-MM-DD');
          }
          res.render('venta/edit', { venta });
        } else {
          res.send('ERROR al INTENTAR ACTUALIZAR LA venta, NO EXISTE');
        }
      }
    });
  }
};

// Editar una venta
exports.ventaEdit = (req, res) => {
  const { id, fecha, total } = req.body;

  if (isNaN(id)) {
    res.send('ERROR ACTUALIZANDO venta');
  } else {
    db.query(
      'UPDATE venta SET fecha = ?, total = ? WHERE id = ?',
      [fecha, total, id],
      (error) => {
        if (error) {
          res.send('ERROR ACTUALIZANDO venta: ' + error);
        } else res.redirect('/ventas');
      }
    );
  }
};