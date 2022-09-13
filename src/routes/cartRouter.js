import { Router } from "express";
import { addCartProducts, getCartProducts, removeCartProducts, cleanCart } from "../controllers/cartController.js";
import privateToken from "../middlewares/privateRouteMiddleware.js";

const cartRouter = Router();

cartRouter.use(privateToken);

cartRouter.post('/cart', addCartProducts);
cartRouter.get('/cart', getCartProducts);
cartRouter.delete('/cart/:id', removeCartProducts);
cartRouter.delete('/cart/all', cleanCart);

export default cartRouter;