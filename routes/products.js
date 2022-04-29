const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/products");

// router.get("/", getAllProducts);
// router.get("/:id", getSingleProduct);

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getSingleProduct);

module.exports = router;
