const express = require("express");
const multer = require("multer");
const path = require("path");
const Blog = require("../model/blog");
const router = express.Router();
// const { blogDetails } = require("../controller/blogController");
router.use("/api", require("./api"));

const storageEngine = multer.diskStorage({
  destination: "C:/Users/SHUBHAM GUPTA/Desktop/Shubham Gupta/blog-app/public",
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
// initialize multer
const upload = multer({
  storage: storageEngine,
});

router.post("/api/v1/blog/new", upload.single("blog_image"), (req, res) => {
  var imageName = req.file.filename;
  var blogDetail = new Blog({
    title: req.body.title,
    content: req.body.content,
    imageName: imageName,
  });
  blogDetail.save(function (err, doc) {
    if (err) throw err;
    return res.status(200).json({
      sucess: 1,
      message: "Product is created",
      blog: doc,
    });
  });
});

// router.get("/blogs/:id", blogDetails);
module.exports = router;
