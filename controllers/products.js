const Product = require("../models/Product");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const createProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
});

const getAllProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
});

const getSingleProduct = asyncWrapper(async (req, res, next) => {
  const { id: productID } = req.params;
  const product = await Product.findOne({ _id: productID });
  if (!product) {
    return next(createCustomError(`No task with id ${productID}`, 404));
  }
  res.status(200).json({ product });
});

module.exports = { createProduct, getAllProducts, getSingleProduct };
