const Blog = require("../model/blog");
module.exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).json({
      status: 1,
      message: "Blog Fetched",
      blogs,
    });
  } catch (err) {
    return res.json({
      error: err,
      status: 0,
    });
  }
};

module.exports.blogDetails = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.json({
        status: 0,
        msg: "No blog exists",
      });
    }
    return res.status(200).json({
      status: 1,
      message: "Blog Details fetched!",
      blog,
    });
  } catch (err) {
    return res.json({
      status: 0,
      error: err,
    });
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (blog === null) {
      return res.json({
        status: 0,
        msg: "No blog exists",
      });
    }
    return res.status(200).json({
      status: 1,
      message: "Blog deleted !",
      blog,
    });
  } catch (err) {
    return res.json({
      status: 0,
      error: err,
    });
  }
};
