const User = require("../models/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("_id name");
    res.status(200).json(users);
  } catch (error) {
    console.error("Error retrieving users:", error.message);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
const createUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "user created", user });
  } catch (error) {
    console.error("Error creating user:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "user found", user });
  } catch (error) {
    console.error("Error retrieving user:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
module.exports = { getAllUsers, createUser, getUserById };
