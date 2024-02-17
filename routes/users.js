const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sumanrv944:rohitrs@user.dvnz1es.mongodb.net/users");

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    message: {
        type:String,
        require: true
    },
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "first"
    }
})
module.exports = mongoose.model("user", userSchema);
