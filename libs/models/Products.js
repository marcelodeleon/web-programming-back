const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  photos: { type: Array },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
