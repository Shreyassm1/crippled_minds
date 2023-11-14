const express = require("express");
const router = express.Router();
const Content = require("../models/Content")
const User = require("../models/User")
const isAuthenticated = require("./server");

//create post
router.post('/upload', isAuthenticated, async(req,res) => {
    
    const {topic, author, content, timeStamp, media} = req.body;
    if (!topic || !author || !content || !timeStamp) {
        return res.status(401).json({error : "Invalid request body"})
    }
    const newPost = Content({
        topic,
        author : req.user._id,
        content,
        timeStamp,
        media,
    });
    await newPost.save();
    res.json(newPost);

});

//my posts
router.get('/upload', isAuthenticated, async(req,res) => {
    
    const posts = await Content.find({author : req.user._id})
    if (!posts) {
        return res.status(404).json({error : "Not found"})
    }
    res.json(posts);
});