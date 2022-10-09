const express = require("express");
const app = express();

const { projects } = require("./data.json");

app.set("view engine", "pug");

//testing server
app.get("/", (req, res) => {
  res.send(projects);
});

app.listen(3000, () => {
  console.log("this server is running on localhost:3000");
});
