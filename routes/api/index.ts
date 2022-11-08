import { Router } from "express";
import productRoutes from "./product";
import providerRoutes from "./provider";
import detailRoutes from "./detailCart";

const router = Router();
// todas las rutas que lleguen a /api/blogs, ejecutaran lo que se exporto de blogRoutes
router.use("/products", productRoutes);
router.use("/providers", providerRoutes);
router.use("/details", detailRoutes);
// se pueden agregar todas las rutas que se necesiten, estaran dentro de /api

export default router;
