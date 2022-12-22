import  express from "express";
import { getAllUsers, createUser, deleteUserById, updateUser, getElementById } from "../contoller/user.js";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getElementById).put(updateUser).delete(deleteUserById);
 



export default router;