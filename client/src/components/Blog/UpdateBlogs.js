// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import TextareaAutosize from "@material-ui/core/TextareaAutosize";
// import { useAlert } from "react-alert";
// import { useNavigate, useParams } from "react-router-dom";
// import "./blog.css";
// import Loader from "../layout/Loader/Loader";
// import { useSelector, useDispatch } from "react-redux";
// import { updateBlog } from "../../actions/blogAction";
// import { getBlogDetails } from "../../actions/blogAction";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(5),
//       width: "25ch",
//     },
//   },
// }));
// export default function UpdateBlogs() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const dispatch = useDispatch();
//   const alert = useAlert();
//   const navigate = useNavigate();

//   let { id } = useParams();
//   const { blog, loading } = useSelector((state) => state.blogDetails);
//   if (blog && blog != "undefined") {
//     setTitle(blog.title);
//     setContent(blog.content);
//   }
//   useEffect(() => {
//     dispatch(getBlogDetails(id));
//   }, [dispatch]);
//   const handleImage = (e) => {
//     let files = e.target.files;
//     let reader = new FileReader();
//     reader.readAsDataURL(files[0]);
//   };
//   const createBlogSubmitHandler = async (e) => {
//     e.preventDefault();
//     let form = document.getElementById("form");
//     let formData = new FormData(form);
//     dispatch(updateBlog(id, formData));
//     alert.success("Blog Updated !");
//     navigate("/");
//   };
//   const classes = useStyles();
//   return (
//     <div className="form-container">
//       {loading ? (
//         <Loader />
//       ) : (
//         <>
//           <form
//             className={classes.root}
//             id="form"
//             encType="multipart/form-data"
//             onSubmit={createBlogSubmitHandler}
//           >
//             <div>
//               <TextField
//                 id="standard-basic"
//                 name="title"
//                 className="resize"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 label="Title"
//               />
//             </div>
//             <div>
//               <TextareaAutosize
//                 aria-label="minimum height"
//                 minRows={5}
//                 className="resize"
//                 name="content"
//                 value={content}
//                 placeholder="write blog content here"
//                 onChange={(e) => setContent(e.target.value)}
//               />
//             </div>
//             <div>
//               <label class="form-label" for="customFile">
//                 Upload image
//               </label>
//               <input
//                 type="file"
//                 name="blog_image"
//                 accept="image/*"
//                 class="form-control"
//                 onChange={handleImage}
//               />
//             </div>
//             <button
//               type="button"
//               id="createProductBtn"
//               type="submit"
//               class="btn btn-info"
//             >
//               Update Blog
//             </button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// }
