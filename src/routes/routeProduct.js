import { Router } from "express";
import productController from "../controllers/productController.js";
import {isAuth} from "../middlewares/isAuth.js";
import { authJWT } from "../middlewares/index.js";
const routeProduct = Router();

/*====================[Rutas API: /api/productos]====================*/
routeProduct.get("/productos", productController.getAllProducts);
routeProduct.get("/productos/:id", productController.getProductById);
routeProduct.post(
  "/productos",
  [authJWT.verifyToken, authJWT.verifyAdmin],
  productController.createProduct
);
routeProduct.put(
  "/productos/:id",
  [authJWT.verifyToken, authJWT.verifyAdmin],
  productController.updateProduct
);
routeProduct.delete(
  "/productos/:id",
  [authJWT.verifyToken, authJWT.verifyAdmin],
  productController.deleteProduct
);

export default routeProduct;
