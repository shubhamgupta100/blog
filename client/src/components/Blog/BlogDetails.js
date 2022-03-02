import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs, getBlogDetails, deleteBlog } from "../../actions/blogAction";
import { useAlert } from "react-alert";

import Loader from "../layout/Loader/Loader";
import { loadUser } from "../../actions/userAction";
import "./blogDetail.css";
export default function BlogDetails() {
  const dispatch = useDispatch();
  const { blog, loading } = useSelector((state) => state.blogDetails);
  const { message, status } = useSelector((state) => state.delUpdBlog);
  const { isAuthenticated } = useSelector((state) => state.user);
  const alert = useAlert();
  const navigate = useNavigate();
  let { id } = useParams();
  // let baseUrl = "http://localhost:7000";
  let image_url = "/img/" + blog.imageName;
  useEffect(() => {
    dispatch(getBlogDetails(id));
    dispatch(loadUser());
  }, [dispatch, id]);
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteBlog(id));
    dispatch(getBlogs());
    alert.success(`Blog deleted !`);
    navigate("/");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    navigate(`/blog/update/${id}`);
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="blog_detail_container">
          <div className="update-delete">
            <h1>id : {blog._id}</h1>
            <div>
              {isAuthenticated ? (
                <>
                  <div>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      onClick={handleUpdate}
                    >
                      Update Blog
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={handleDelete}
                    >
                      Delete Blog
                    </button>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div>
            <h4>{blog.title}</h4>
          </div>
          <div>
            <img src={image_url} alt={blog._id} />
          </div>
          <div className="content">
            <h6>{blog.content}</h6>
          </div>
        </div>
      )}
    </>
  );
}
