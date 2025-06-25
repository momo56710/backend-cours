const Category = require("../models/categoryModel");
const Post = require("../models/postModel");
const createCetgory = async (name, description, posts) => {
  try {
    // Validate all posts exist before creating the category
    for (const postId of posts) {
      const post = await Post.findById(postId);
      if (!post) {
        throw new Error(`Post with ID ${postId} not found`);
      }
    }

    const category = new Category({
      name,
      description,
      posts,
    });
    await category.save();
    console.log("Category created successfully:", category);
  } catch (error) {
    console.error("Error creating category:", error.message);
  }
};

const getAllCategories = async () => {
  try {
    const categories = await Category.find().populate("posts");
    console.log("Categories retrieved successfully:", JSON.stringify(categories, null, 2));
    return categories;
  } catch (error) {
    console.error("Error retrieving categories:", error.message);
  }
};
module.exports = {createCetgory , getAllCategories};
