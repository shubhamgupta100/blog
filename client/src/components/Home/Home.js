import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "../../actions/blogAction";
import Carousel from "./Carousel";
import BlogCard from "./BlogCard";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);
  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <>
      <Carousel />
      <h2 className="homeHeading">Featured Blogs</h2>
      <div className="container" id="container">
        {blogs && blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
      </div>
    </>
  );
};

export default Home;
