const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  getUserDetail,
} = require("../../../controller/userController");
const { isAuthenticatedUser } = require("../../../middleware/auth");
router.post("/user/register", register);
router.post("/user/login", login);
router.get("/user/me", isAuthenticatedUser, getUserDetail);
router.get("/user/logout", logout);

module.exports = router;
