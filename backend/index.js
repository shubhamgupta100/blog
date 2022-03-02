const express = require("express");

const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

const db = require("./config/mongoose");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to uncaughtException");
  process.exit(1);
});

app.use("/img/", express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());
app.use("/", require("./routes/index"));

// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
// });
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(`Error on running the server:${err}`);
  } else {
    console.log(`Server is running on port:${process.env.PORT}`);
  }
});

// Unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
