const User = require("./models/userModal");

const createUser = async (name, email) => {
  try {
    const user = new User({ name, email });
    await user.save();
    console.log("User created successfully:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

module.exports = createUser;