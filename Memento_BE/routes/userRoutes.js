import { Router } from "express";
import {createUser,updateUser,getAllUsers,showUser,deleteUser} from "../Controller/UserController.js";
const router = Router();


router.post("/", createUser);
router.put("/:id", updateUser);
router.get("/", getAllUsers);
router.get("/:id", showUser);
router.delete("/:id", deleteUser);

export default router;