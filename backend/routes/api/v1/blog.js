const express = require("express");
const { isAuthenticatedUser } = require("../../../middleware/auth");
const {
  getAllBlogs,
  blogDetails,
  deleteBlog,
} = require("../../../controller/blogController");
const router = express.Router();

router.get("/blogs", getAllBlogs);
router.get("/blogs/:id", blogDetails);
router.delete("/blogs/:id", deleteBlog);

module.exports = router;
