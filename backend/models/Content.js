const mongoose = require("mongoose");

const contentSchema = mongoose.Schema({
    
    topic : {
        type : String,
        required : true,
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User',
    },
    content : {
        type : String,
        required : true,
    },
    timeStamp : {
        type : Date,
        default : Date.now,
    },
    media : {
        data : Buffer,
        contentType : String,
    },

});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;