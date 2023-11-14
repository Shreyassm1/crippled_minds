const mongoose = require("mongoose");

const skillSchema = mongoose.Schema({
    skillName : {
        type : String,
    },

});

const Skills = mongoose.model('Skills',skillSchema);
module.exports = Skills;