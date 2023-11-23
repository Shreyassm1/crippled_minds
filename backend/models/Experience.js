const mongoose = require("mongoose");

const experienceSchema = mongoose.schema({

    companyName : {
        type : String,
        required : true,
    },
    startDate : {
        type : Date,
        required : true,
    },
    endDate : {
        type : Date,
        requried : true,
    },
    job : {
        type : String,
        requried : true,
    },

});

const Experience = mongoose.model("Experience", experienceSchema);
module.exports = Experience;