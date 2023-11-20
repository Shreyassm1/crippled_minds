const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const isAuthenticated = require("../server");

router.post('/register', async (req, res) => {
    console.log("Route accessed");

    try {
        const { username, email, password } = req.body;
        console.log("Request Body:", req.body);

        if (!username || !email || !password) {
            console.log("Invalid request body");
            return res.status(400).json({ error: "Invalid request body" });
        }

        const existingUserByEmail = await User.findOne({ email: email.trim() });
        const existingUserByUsername = await User.findOne({ username: username.trim() });

        if (existingUserByEmail || existingUserByUsername){
            console.log("Existing User:", existingUser);
        }

        if (existingUserByEmail || existingUserByUsername) {
            console.log("User with email already exists");
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
        console.log("New User Created:", newUser);

        return res.status(200).json({ message: "User created successfully" });
        
    } catch (error) {
        console.error("Error in route:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});


router.post("/login", async(req,res) => {

    //Discrepancies
    const {email, password} = req.body;
    if (!email || !password) {
        return res.status(400).json({error : "Invalid request body"});
    }

    const user = await User.findOne({email: email});
    if (!user){
        return res.status(401).json({error : "Invalid email or password"})
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(401).json({error : "Invalid email or password"})
    }

    //valid
    return res.status(200).json({message : "Login Successfull"});
});

module.exports = router;

