const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  ownerId: { type: Schema.Types.ObjectId, required: true },
  name: { type: String },
  description: { type: String },
  photos: { type: Array },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
