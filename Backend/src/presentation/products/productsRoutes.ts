import  {ProductController}  from "./productsController";
import { Router } from "express";

const router = Router();

router.get("/",  ProductController.ProductList);
router.post("/create",  ProductController.Productcreate);


export default router;