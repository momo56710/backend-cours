const connectDb = require("./config/db");
const express = require("express");
const usersRoutes = require("./routes/usersRoutes");
require("dotenv").config();
const app = express();
// const createUser = require("./controllers/userController");
const postController = require("./controllers/postController");
const commentController = require("./controllers/commentController");
const categoriesController = require("./controllers/categoryController");
connectDb();

app.use(express.json());
app.use("/users", usersRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
