const { Router } = require("express");
const detailController = require("../../../controllers/detail.controller");
const router = Router();

router.post("/", detailController.detailPost);
router.delete("/", detailController.detailDelete);

export default router;
