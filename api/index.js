const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./model/user");

mongoose
  .connect("mongodb://localhost:27017/login", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(() => console.log("Error to connect to db"));
const app = express();
app.use(express.json());

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.post("/login", (req, res) => {
  // Auth
  const user = { id: 1 };
  const token = jwt.sign({ user }, "my_secret_key");
  res.json({
    token: token,
  });
});

app.get("/protected", ensureToken, (req, res) => {
  jwt.verify(req.token, "my_secret_key", (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        text: "this is forbidden",
        data: data,
      });
    }
  });
  res.json({
    text: "this is protected",
  });
});

app.post("/register", async (req, res) => {
  console.log("req", req.body);
  try {
    const { username, password } = req.body;
    const response = await User.create({
      username,
      password,
    });
    res.json({
      created: true,
    });
    console.log("User created succesfully", response);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

app.listen(8000, () => console.log("App Listening at port 8000"));
