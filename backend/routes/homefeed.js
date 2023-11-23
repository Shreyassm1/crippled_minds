const express = require("express");
const router = express.Router();
const Content = require("../models/Content");
const Content = require("../models/Content")

//get allposts
router.get('/upload', async(req,res) => {
    
    const posts = await Content.find({}); //unlike the profilepage feed which has only one user
    if (!posts) {                         //this code helps us get posts from the entire database
        return res.status(404).json({error : "Not found"});
    }
    res.json(posts);

});
 
module.exports = router;