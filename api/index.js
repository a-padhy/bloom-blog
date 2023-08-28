const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const salt = bcrypt.genSaltSync(10);
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://ashutoshpadhy001:zjephmXXXDOViZKH@cluster0.tri05hh.mongodb.net/?retryWrites=true&w=majority"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    //logged in
  } else {
    res.status(400).json("Wrong Credentials");
  }
});

app.listen(4000, () => {
  console.log("server listening on 4000");
});
