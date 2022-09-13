import { Router } from "express";
import { addCartProducts, getCartProducts, removeCartProducts, cleanCart } from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.post('/cart', addCartProducts);
cartRouter.get('/cart', getCartProducts);
cartRouter.delete('/cart/:id', removeCartProducts);
cartRouter.delete('/cart', cleanCart);

export default cartRouter;