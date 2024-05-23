import { body, param } from "express-validator";
import { UserController } from "./userController";
import { Router } from "express";
import { handleInputError } from "../../middleware/validate";

/**
 * Express router instance for handling user routes.
 */
const router = Router();

router.get("/", UserController.getAllUsers);
router.get(
  "/:userid",
  param("userid").isUUID().withMessage("El ID del usuario no es valido"),
  handleInputError,

  UserController.getUserById
);
router.post(
  "/create",
  body("document").notEmpty().withMessage("El documento es requerido"),
  body("last_name").notEmpty().withMessage("El apellido es requerido"),
  body("name").notEmpty().withMessage("El nombre es requerido"),
  handleInputError,
  UserController.createUser
);

router.put(
  "/:userid",
  param("userid").isUUID().withMessage("El ID del usuario no es valido"),
  handleInputError,
  UserController.updateUser
);

router.delete(
  "/:userid",
  param("userid").isUUID().withMessage("El ID del usuario no es valido"),
  handleInputError,
  UserController.deleteUser
);
router.put(
  "/change-role/:userid",
  param("userid").isUUID().withMessage("El ID del usuario no es valido"),
  UserController.changeRole
);

export default router;
