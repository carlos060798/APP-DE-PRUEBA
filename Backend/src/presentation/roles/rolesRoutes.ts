
import { Router } from "express";
import RoleController from './rolesController';

const router = Router();
router.post("/",  RoleController.Rolecreate);
router.get("/",  RoleController.RoleList);
router.get("/:id",  RoleController.RoleListById);
export default router;