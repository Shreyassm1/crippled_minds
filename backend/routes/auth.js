const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const isAuthenticated = require("../middleware/isAuthenticated");
const jwt = require('jsonwebtoken');

router.post('/register',async (req, res) => {
    //console.log("Register Route accessed");

    try {
        const { username, email, password } = req.body;
        //console.log("Request Body:", req.body);

        if (!username || !email || !password) {
            //console.log("Invalid request body");
            return res.status(400).json({ error: "Invalid request body" });
        }

        const existingUserByEmail = await User.findOne({ email: email.trim() });
        const existingUserByUsername = await User.findOne({ username: username.trim() });

        if (existingUserByEmail || existingUserByUsername){
            //console.log("Existing User:", existingUser);
        }

        if (existingUserByEmail || existingUserByUsername) {
            //console.log("User with email already exists");
            return res.status(409).json({ error: "A user with this email already exists" });
        }
        console.log("Creating a new user");

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUserDetails = {
            username,
            email,
            password: hashedPassword,
        };

        const newUser = await User.create(newUserDetails);
        //console.log("New User Created:", newUser);

        return res.status(200).json({ message: "User created successfully" });
        
    } catch (error) {
        //console.error("Error in route:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


router.post("/login", async(req,res) => {
    //console.log("login Route accessed");

    //Discrepancies
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({error : "Invalid request body"});
    }

    const user = await User.findOne({username: username});
    if (!user){
        return res.status(401).json({error : "Invalid username or password"})
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(401).json({error : "Invalid username or password"})
    }

    //valid
    const token = jwt.sign({ userId: user._id }, 'fstiwrhsb', {expiresIn : '5h'});
    console.log(token);
    res.json({ token });
});

router.post("/home", isAuthenticated, async (req, res) => {
    try {
      const userId = req.user.userId;
  
      const user = await User.findById(userId);
  
      res.json({ message: `Welcome, ${user.username}!`, email: user.email});
    } catch (error) {
      //console.error("Error fetching user data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});
  
  

module.exports = router;
