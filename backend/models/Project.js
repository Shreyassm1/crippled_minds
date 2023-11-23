const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
    projectName : {
        type : String,
    },
    projectDesc : {
        type : String,
    },

});

const Project = mongoose.model('Project',projectSchema);
module.exports = Project;