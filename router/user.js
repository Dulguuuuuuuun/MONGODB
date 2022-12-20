import  express from "express";
import { getAllUsers, createUser } from "../contoller/user.js";

const router = express.Router();

router.get("/users",getAllUsers )
router.post("/users", createUser)



export default router;