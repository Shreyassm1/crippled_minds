const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({secret : 'fstiwrhsb', resave : false, saveUninitialized : false}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: "Not authenticated" });
};

mongoose
  .connect("mongodb+srv://altshreyas:fstiwrhsb@cluster0.kjs4euw.mongodb.net/?retryWrites=true&w=majority",{
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err))
  
const port = process.env.PORT || 8000;
const server = app.listen(port,()=> console.log(`server is running ${port}`));
