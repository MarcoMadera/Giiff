const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = require("./model/user");
const cors = require("cors");
const accessTokenSecret = "my_secret_key";
mongoose
  .connect("mongodb://localhost:27017/login", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch(() => console.log("Error to connect to db"));
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

function ensureToken(req, res, next) {
  const { authorization } = req.headers;
  if (authorization) {
    const token = authorization.split(" ")[1];
    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      console.log(user);
      req.user = user;
      next();
    });
    next();
  } else {
    res.sendStatus(403);
  }
}

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const [_id] = await User.find({
    username,
    password,
  });

  if (_id) {
    const token = jwt.sign({ _id }, accessTokenSecret);
    res.json({
      token: token,
    });
  } else {
    res.sendStatus(403);
  }
});

app.get("/protected", ensureToken, (req, res) => {
  jwt.verify(req.token, accessTokenSecret, (err, data) => {
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
  try {
    const { username, password } = req.body;
    const response = await User.create({
      username,
      password,
    });
    res.sendStatus(201);
    console.log("User created succesfully", response);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
  }
});

app.listen(8000, () => console.log("App Listening at port 8000"));
