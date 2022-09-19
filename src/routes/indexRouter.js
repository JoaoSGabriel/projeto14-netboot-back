import { Router } from "express";
import authRouter from "./authRouter.js";
import cartRouter from "./cartRouter.js";
import checkoutRouter from "./checkoutRouter.js";
import productRouter from "./productsRouter.js";

const router = Router();

router.use(authRouter);
router.use(productRouter);
router.use(cartRouter);
router.use(checkoutRouter);

export default router;
