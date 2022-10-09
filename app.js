const express = require("express");
const app = express();

//requiring json data
const { projects } = require("./data.json");

//setting view engine to pug
app.set("view engine", "pug");

//connecting static css files
app.use("/static", express.static("public"));

//testing server
app.get("/", (req, res) => {
  res.send(projects);
});

app.listen(3000, () => {
  console.log("this server is running on localhost:3000");
});
