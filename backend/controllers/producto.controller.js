const { Product } = require('../models');

exports.obtenerProductos = async (req, res) => {
  const productos = await Product.findAll();
  res.json(productos);
};

exports.crearProducto = async (req, res) => {
  try {
    const producto = await Product.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obtenerProducto = async (req, res) => {
  const producto = await Product.findByPk(req.params.id);
  producto
    ? res.json(producto)
    : res.status(404).json({ error: 'Producto no encontrado' });
};

exports.actualizarProducto = async (req, res) => {
  const producto = await Product.findByPk(req.params.id);
  if (!producto)
    return res.status(404).json({ error: 'Producto no encontrado' });
  await producto.update(req.body);
  res.json(producto);
};

exports.eliminarProducto = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product)
    return res.status(404).json({ error: 'Producto no encontrado' });
  await product.destroy();
  res.json({ mensaje: 'Producto eliminado' });
};
