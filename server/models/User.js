const mongoose = require("mongoose");
const Skills = require("/Skills");
const Experience = require("/Experience");
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
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Skills',
    },
    workExperience : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Experience',
    },
    profilePicture : {
        type : mongoose.Schema.Types.ObjectId,
    }
    
});

const User = mongoose.model("User", userSchema);
module.exports = User;
