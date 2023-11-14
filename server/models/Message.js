const mongoose = require("mongoose");


const messageSchema = mongoose.Schema({
    
    sender : {
        ref : 'User',
        type: mongoose.Schema.Types.ObjectId,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    timeStamp : {
        type : Date,
        default : Date.now,
    }

});

const Message = mongoose.model('message', messageSchema);
module.exports = Message;