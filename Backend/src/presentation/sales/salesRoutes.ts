import { Router } from "express";
import { SalesController } from './salesController';

/**
 * Express router instance for handling sales routes.
 */
const router = Router();

router.get("/",  SalesController.SalesList);
router.post("/:products_id/:users_id",  SalesController.Salescreate);
router.get("/:id",  SalesController.SalesListById);
router.put("/:id",  SalesController.SalesUpdate);
router.delete("/:id",  SalesController.SalesDelete);





export default router;