import { Router } from "express";
import { getProducts, postProducts } from '../controllers/productsController.js';

const productRouter = Router();

productRouter.get('/products', getProducts);
productRouter.post('/products', postProducts);

export default productRouter;