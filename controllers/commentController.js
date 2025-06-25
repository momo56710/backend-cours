const Post = require("../models/postModel");
const User = require("../models/userModel");
const Comment = require("../models/commentModel");
const createComment = async (title, postId, userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const post = await Post.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    const comment = new Comment({ content : title, post: postId, user: userId });
    await comment.save();
    console.log("Comment created successfully:", comment);
  } catch (error) {
    console.error("Error creating comment:", error.message);
  }
};

module.exports = createComment;
