import  express from "express";
import { getPostById } from "../contoller/post.js";

const router = express.Router();

// router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getPostById)
 



export default router;