const path = require("path");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const postsRouter = require("./routes/posts");
const usersRouter = require("./routes/user");
mongoose
  .connect(
    "mongodb+srv://oleg:"+process.env.PW+"@MyDreamApp-uah5h.mongodb.net/test?retryWrites=true",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("sucssessfuly connected!");
  })
  .catch(() => {
    console.log("failed to connect...");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRouter);
app.use("/api/user", usersRouter);
module.exports = app;
