const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter blog title"],
    trim: true,
  },
  content: {
    type: String,
    required: [true, "Please provide some description about about"],
  },

  imageName: {
    type: String,
    required: true,
  },
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);
