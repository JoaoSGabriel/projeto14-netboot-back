import { Router } from "express";
import { getProducts, postProducts } from '../controllers/productsController.js';
import privateToken from "../middlewares/privateRouteMiddleware.js";

const productRouter = Router();

productRouter.use(privateToken);

productRouter.get('/products', getProducts);
productRouter.post('/products', postProducts);

export default productRouter;