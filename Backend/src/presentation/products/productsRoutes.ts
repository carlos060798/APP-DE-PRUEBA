import  {ProductController}  from "./productsController";
import { Router } from "express";

/**
 * Express router for handling products routes.
 */
const router = Router();

router.get("/",  ProductController.ProductList);
router.post("/create",  ProductController.Productcreate);
router.delete("/:id",  ProductController.ProductDelete);


export default router;