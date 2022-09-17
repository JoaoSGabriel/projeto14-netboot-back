import { Router } from "express";
import { getProducts, postProducts, getOneProduct, addFavoriteProduct } from '../controllers/productsController.js';
import privateToken from "../middlewares/privateRouteMiddleware.js";

const productRouter = Router();

productRouter.post("/products", postProducts);

productRouter.use(privateToken);
productRouter.get('/products', getProducts);
productRouter.get('/products/:id', getOneProduct);
productRouter.put('/products/favorite/:id', addFavoriteProduct);

export default productRouter;