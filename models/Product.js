const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  description: {
    type: String,
    required: [true, "product description must be provided"],
  },
  imgURL: {
    type: String,
    required: true,
  },
  colors: {
    type: [String],
    required: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  reviews: {
    type: Number,
    default: 60,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
