const mongoose = require("mongoose");

const okSchema = new mongoose.Schema({
    clear: {
        type: String
    },
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
})

module.exports = mongoose.model("first", okSchema);
