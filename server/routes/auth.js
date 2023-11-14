const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const isAuthenticated = require("./server");


router.post("/register", async(res,req) => {
    
    //Discrepancies
    const {firstName, lastName, email, password} = req.body;
    if (!firstName || !lastName || !email) {
        return res.status(400).json({error : "Invalid request body"});
    }

    const existingUser = await UserActivation.findOne({email : email});
    if (existingUser){
        return res
            .status(402)
            .json({error : "A user with this email already exists"}); 
    }

    //valid
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserDetails = {
        firstName, 
        lastName, 
        email, 
        password : hashedPassword,
    };
    const newUser = await User.create(newUserDetails);

});

router.post("/login", isAuthenticated, async(req,res) => {

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

module.exports = router();