const express = require("express");
const app = express();

//requiring json data
const { projects } = require("./data.json");

//setting view engine to pug
app.set("view engine", "pug");

//connecting static css files
app.use("/static", express.static("public"));

//index/ home route
app.get("/", (req, res) => {
  res.render("index", { projects });
});

//about route
app.get("/about", (req, res) => {
  res.render("about");
});

//project route for each project
app.get("/project/:id", (req, res) => {
  const { id } = req.params; // const id = req.params.id
  const { project_name } = projects[id]; // const project_name = projects[0].project_name
  const { description } = projects[id];
  const { technologies } = projects[id]; //returns an array
  const { live_link } = projects[id];
  const { github_link } = projects[id];
  const { image_urls } = projects[id];

  console.log(projects[1].image_urls[0]);

  const focusedProjectInfo = {
    id,
    project_name,
    description,
    technologies,
    live_link,
    github_link,
  };
  res.render("project", focusedProjectInfo);
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
  res.render("error");
});

app.listen(3000, () => {
  console.log("this server is running on localhost:3000");
});
