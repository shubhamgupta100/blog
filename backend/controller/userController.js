const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../model/user");
const sendToken = require("../utils/jwtTokens");
//Register
module.exports.register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  const user = await User.create({
    name,
    email,
    password,
  });
  sendToken(user, 201, res, "Registered Successfully !");
});

// Login

module.exports.login = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter email and password!", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password !", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password !", 401));
  }
  sendToken(user, 200, res, "Login Successfully !");
});

// Log out User
module.exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged out successfully!",
  });
});

module.exports.getUserDetail = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  return res.status(200).json({
    success: true,
    user,
  });
});
