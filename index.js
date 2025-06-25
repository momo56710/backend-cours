const connectDb = require("./config/db");
// const createUser = require("./controllers/userController");
const postController = require("./controllers/postController");
const commentController = require("./controllers/commentController");
connectDb();

// createUser("said", "said@gmail.com");
// createUser("himda", "himda@gmail.com");

// postController.createPost(
//   "My second Post",
//   "This is the content of my first post",
//   "685abd1847145e2b67460b66"
// );
// postController.getPosts()

commentController(
  "This is a comment on the first post",
  "685ac1ea2288f6c6adb15674",
  "685abd1847145e2b67460b65"
);
