const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String
});

module.exports = mongoose.model('Producto', productoSchema);

