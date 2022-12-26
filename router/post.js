import express from "express";
import { createPosts, deletePosts, getAllPosts, getPostById } from "../contoller/post.js";
const postsRouter = express.Router();

postsRouter.route("/").get(getAllPosts).post(createPosts);
postsRouter.route("/:id").delete(deletePosts).get(getPostById);

export default postsRouter;