const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const LocalStrategy = require('passport-local').Strategy; 
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const app = express();
const User = require("./models/User");
const auth = require('./routes/auth')
app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: 'fstiwrhsb', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/register', auth);

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

fs.readdirSync('./routes').map((r)=> app.use(require('./routes/' + r)));
mongoose
  .connect("mongodb+srv://altshreyas:fstiwrhsb@cluster0.kjs4euw.mongodb.net/?retryWrites=true&w=majority",{
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err))
  
const port = process.env.PORT || 8000;
const server = app.listen(port,()=> console.log(`server is running ${port}`));
