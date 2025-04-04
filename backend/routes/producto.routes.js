const express = require('express');
const router = express.Router();
const {
  obtenerProductos,
  crearProducto,
  obtenerProducto,
  actualizarProducto,
  eliminarProducto,
} = require('../controllers/producto.controller');

router.get('/producto', obtenerProductos);

router.post('/producto', crearProducto);

router.get('/producto/:id', obtenerProducto);

router.put('/producto/:id', actualizarProducto);

router.delete('/producto/:id', eliminarProducto);

module.exports = router;
