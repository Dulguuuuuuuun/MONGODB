import  express from "express";
import { getAllusers, createUsers, deleteUserById, updateUser, getUserById } from "../contoller/user.js";

const router = express.Router();

router.route("/").get(getAllusers).post(createUsers);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUserById);
 



export default router;