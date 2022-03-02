import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import "./blog.css";
import { useSelector, useDispatch } from "react-redux";
import { createBlog } from "../../actions/blogAction";
import { NEW_BLOG_RESET } from "../../actions/actionType";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
      width: "25ch",
    },
  },
}));
export default function NewBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { success } = useSelector((state) => state.newBlog);
  useEffect(() => {
    if (success && success == 1) {
      alert.success("Blog added !");
      navigate("/");
      dispatch({ type: NEW_BLOG_RESET });
    }
  }, [dispatch, alert, navigate, success]);
  const handleImage = (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
  };
  const createBlogSubmitHandler = async (e) => {
    e.preventDefault();
    let form = document.getElementById("form");
    let formData = new FormData(form);
    dispatch(createBlog(formData));

    dispatch({ type: NEW_BLOG_RESET });
    alert.success("Blog added !");
    navigate("/");
  };
  const classes = useStyles();
  return (
    <div className="form-container">
      <form
        className={classes.root}
        id="form"
        encType="multipart/form-data"
        onSubmit={createBlogSubmitHandler}
      >
        <div>
          <TextField
            id="standard-basic"
            name="title"
            className="resize"
            onChange={(e) => setTitle(e.target.value)}
            label="Title"
          />
        </div>
        <div>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            className="resize"
            name="content"
            placeholder="write blog content here"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <label class="form-label" for="customFile">
            Upload image
          </label>
          <input
            type="file"
            name="blog_image"
            accept="image/*"
            class="form-control"
            onChange={handleImage}
          />
        </div>
        <button
          type="button"
          id="createProductBtn"
          type="submit"
          class="btn btn-info"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
}
