
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rohitrvs:rohitrvs@message.nmc801a.mongodb.net/");

const userSchema = new mongoose.Schema({
    message: {
        type:String,
        require: true
    }
})

module.exports = mongoose.model("user", userSchema);
