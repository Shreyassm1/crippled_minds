const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    
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
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Media',
    },

});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;