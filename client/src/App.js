import "./App.css";
import Header from "./components/layout/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import LoginSignUp from "./components/User/LoginSignUp";
import NewBlog from "./components/Blog/NewBlog";
import BlogDetails from "./components/Blog/BlogDetails";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LoginSignUp />} />
          <Route exact path="/blog/new" element={<NewBlog />} />
          <Route exact path="/blog/:id" element={<BlogDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
