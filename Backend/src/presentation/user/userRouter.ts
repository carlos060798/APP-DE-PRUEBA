import { UserController } from "./userController";
import { Router } from "express";

const router = Router();

router.get("/",  UserController.getAllUsers);
router.get("/:id",  UserController.getUserById);
router.post("/create",  UserController.createUser);
router.put("/:id",  UserController.updateUser);
router.delete("/:id", UserController.deleteUser);



export default router;