import { Router } from "express";
import contactRouter from "./contact";
import servicesRouter from "./services";
import productsRouter from "./products";

const router = Router();

router.use("/contact", contactRouter);
router.use("/services", servicesRouter);
router.use("/products", productsRouter);

export default router;
