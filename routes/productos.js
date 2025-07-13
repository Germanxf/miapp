const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Modelo de producto
const productoSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String
});

const Producto = mongoose.model('Producto', productoSchema);

// Ruta GET para obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

module.exports = router;

