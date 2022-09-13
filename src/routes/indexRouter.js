import { Router } from "express";
import authRouter from './authRouter.js';
import cartRouter from './cartRouter.js';
import productRouter from './productsRouter.js';

const router = Router();

router.use(authRouter);
router.use(cartRouter);
router.use(productRouter);

export default router;