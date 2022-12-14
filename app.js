const express = require("express");
const app = express();

//requiring json data
const { projects } = require("./data.json");

//setting view engine to pug
app.set("view engine", "pug");

//connecting static css files
app.use("/static", express.static("public"));

//error will be triggered due to missing favicon so implemented this
app.get("/favicon.ico", (req, res) => {
  res.sendStatus(200);
});

//home route
app.get("/", (req, res) => {
  res.render("index", { projects });
});

//about route
app.get("/about", (req, res) => {
  res.render("about");
});

//project route for each project
app.get("/project/:id", (req, res, next) => {
  if (projects[req.params.id]) {
    res.render("project", { project: projects[req.params.id] });
  } else {
    next();
  }
});

//404 error object
app.use((req, res, next) => {
  const err = new Error("This page doesn't exist! 🥺 ");
  err.status = 404;
  next(err);
});

//custom error handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  if (err.status === 404) {
    console.log("oopsies, this page doesn't exist");
    res.render("page-not-found");
  } else {
    res.render("error");
  }
});

app.listen(3000, () => {
  console.log("this server is running on localhost:3000");
});
