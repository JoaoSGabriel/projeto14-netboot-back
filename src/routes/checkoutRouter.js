import { Router } from "express";

import {
  postCheckout,
  getCheckout,
} from "../controllers/checkoutController.js";
import privateToken from "../middlewares/privateRouteMiddleware.js";

const checkoutRouter = Router();

checkoutRouter.use(privateToken);

checkoutRouter.post("/checkout", postCheckout);
checkoutRouter.get("/checkout", getCheckout);

export default checkoutRouter;
