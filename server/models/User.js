const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    email : {
        type : email,
        required : true,
    },
    password : {
        type : password,
        required : true,
    },
    education : {
        type : String,
    },
    skills : {
        type : String,
    },
    workExperience : {
        type : String,
    },
    profilePicture : {
        type : mongoose.Schema.Types.ObjectId,
    }
    
});

const User = mongoose.model("User", userSchema);
module.exports = User;