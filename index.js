require("dotenv").config();
const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello from X not twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login at jarvis AI </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2> Jarvis AI is great </h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
