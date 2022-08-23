const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        default: "fullname"

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    phone:{
        type:Number,
    },
    address:{
        type:String,
        default:"address",
    },
    profilePic: {
        type: String,
        default:"",
    },
    gender:{
        type:String,
        default:"other",
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema)