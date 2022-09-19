import { Router } from "express";
import {
  addCartProducts,
  getCartProducts,
  removeCartProducts,
  cleanCart,
  updateQtCart,
} from "../controllers/cartController.js";
import privateToken from "../middlewares/privateRouteMiddleware.js";

const cartRouter = Router();

cartRouter.use(privateToken);

cartRouter.post("/cart", addCartProducts);
cartRouter.get("/cart/:id", getCartProducts);
cartRouter.delete("/cart/:id", removeCartProducts);
cartRouter.delete("/cleanCart/:id", cleanCart);
cartRouter.put("/cart/:id/:action?", updateQtCart);
export default cartRouter;
