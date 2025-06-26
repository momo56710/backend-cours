const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

// GET /comments - Get all comments with search and pagination
router.get("/", commentController.getAllComments);

// GET /comments/:id - Get comment by ID
router.get("/:id", commentController.getCommentById);

// POST /comments - Create new comment
router.post("/", commentController.createComment);

// PUT /comments/:id - Update comment
router.put("/:id", commentController.updateComment);

// DELETE /comments/:id - Delete comment
router.delete("/:id", commentController.deleteComment);

module.exports = router;
