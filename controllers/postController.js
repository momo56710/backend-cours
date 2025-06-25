const Post = require("../models/postModel");
const User = require("../models/userModel");
const createPost = async (title, content, userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const post = new Post({ title, content, user: userId });
    await post.save();
    console.log("Post created successfully:", post);
  } catch (error) {
    console.error("Error creating post:", error);
  }
};
const getPosts = async () => {
  try {
    const posts = await Post.find()
    console.log("Posts retrieved successfully:", posts);
    return posts;
  } catch (error) {
    console.error("Error retrieving posts:", error);
  }
};
module.exports = {createPost , getPosts};
