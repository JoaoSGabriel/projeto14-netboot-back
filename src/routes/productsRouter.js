import { Router } from "express";
import {
  getProducts,
  postProducts,
} from "../controllers/productsController.js";
import privateToken from "../middlewares/privateRouteMiddleware.js";

const productRouter = Router();

productRouter.post("/products", postProducts);

productRouter.use(privateToken);
productRouter.get("/products", getProducts);

export default productRouter;
