const { Router } = require("express");
const providerController = require("../../../controllers/provider.controller");
const router = Router();

router.post("/", providerController.providerPost);

export default router;
