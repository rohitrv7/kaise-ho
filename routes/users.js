
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/user");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    message: {
        type:String,
        require: true
    }
})

module.exports = mongoose.model("user", userSchema);
