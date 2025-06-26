const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// GET /posts - Get all posts with search and pagination
router.get("/", postController.getAllPosts);

// GET /posts/:id - Get post by ID
router.get("/:id", postController.getPostById);

// POST /posts - Create new post
router.post("/", postController.createPost);

// PUT /posts/:id - Update post
router.put("/:id", postController.updatePost);

// DELETE /posts/:id - Delete post
router.delete("/:id", postController.deletePost);

module.exports = router;
