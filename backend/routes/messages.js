const express = require("express");
const router = express.Router();
const Message = require("../models/Message");
const User = require("./models/User")
const isAuthenticated = require("./server");

//create a message
router.post('/messages', isAuthenticated, async(req,res) => {

    const {sender, content, timeStamp} = req.body;
    if (!sender || !content || !timeStamp) {
        return res.status(401).json({error: "Invalid request body"});
    }
    const newMessage = Message({
        sender : req.user._id,
        content,
        timeStamp,
    });
    await newMessage.save();
    res.json(newMessage);

});

//see all messages
router.get('/messages', isAuthenticated, async(req,res) => {
    
    const messages = await Message.find({sender : req.user._id});
    if (!messages || messages.length == 0){
        return res.status(404).json({error : "Not found"});
    }
    res.json(messages);

});

module.exports = router;