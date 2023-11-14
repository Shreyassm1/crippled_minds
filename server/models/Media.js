const mongoose = require("mongoose");

const mediaSchema = mongoose.Schema({

    type : {
        type : String,
        required : true,
    },
    url : {
        type : String,
        required : true,
    },
    timeStamp : {
        type : Date,
        default : Date.now,
    },

});
    
const Media = mongoose.model("Media", mediaSchema);
module.exports = Media;