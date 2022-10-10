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
  res.send("This is the home route");
});

//about route
app.get("/about", (req, res) => {
  res.send("This is the about route");
});

//project route for each project
app.get("/project/:id");

app.listen(3000, () => {
  console.log("this server is running on localhost:3000");
});
