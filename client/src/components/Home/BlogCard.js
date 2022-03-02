import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  // let baseUrl = "http://localhost:7000";
  let image_url = "/img/" + blog.imageName;
  return (
    <Link className="productCard" to={`/blog/${blog._id}`}>
      <img src={image_url} alt={blog.title} />
      <p>{blog.title}</p>
    </Link>
  );
};

export default BlogCard;
