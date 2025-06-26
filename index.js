const connectDb = require("./config/db");
const express = require("express");
const usersRoutes = require("./routes/usersRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
require("dotenv").config();
const app = express();

connectDb();

app.use(express.json());

// Routes
app.use("/users", usersRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/categories", categoryRoutes);

// Default route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Blog API",
    endpoints: {
      users: "/users",
      posts: "/posts", 
      comments: "/comments",
      categories: "/categories"
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
