import { Router } from "express";
import { SalesController } from './salesController';

const router = Router();

router.get("/",  SalesController.SalesList);
router.post("/",  SalesController.Salescreate);
router.get("/:id",  SalesController.SalesListById);
router.put("/:id",  SalesController.SalesUpdate);
router.delete("/:id",  SalesController.SalesDelete);





export default router;