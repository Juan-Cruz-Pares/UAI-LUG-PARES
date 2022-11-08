const { Router } = require("express");
const productController = require("../../../controllers/product.controller");
const router = Router();

router.get("/", productController.productsGet);
router.post("/", productController.productsPost);

export default router;
