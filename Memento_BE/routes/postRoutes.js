import { Router } from "express";
import { createPost, getPosts, showPost, updatePost, deletePost } from "../Controller/PostController.js";

const router = Router();

router.post("/",createPost);
router.get("/",getPosts);
router.get("/:id",showPost);
router.put("/:id",updatePost);
router.delete("/:id",deletePost);

export default router;
