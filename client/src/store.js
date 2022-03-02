import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./reducers/userReducer";
import {
  blogsReducer,
  delUpdblogReducer,
  newBlogReducer,
  blogDetailsReducer,
} from "./reducers/blogReducer";

const reducer = combineReducers({
  user: userReducer,
  blogs: blogsReducer,
  delUpdBlog: delUpdblogReducer,
  newBlog: newBlogReducer,
  blogDetails: blogDetailsReducer,
});
const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
