const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');


//REGISTER
const registerUser = asyncHandler(async (req, res) => {

    const {username, email, password, fullname, phone, profilePic, gender, isAdmin, address} = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("Please fill in all fields!");
    }

    const user = await User.findOne({email});

    if (user) {
        res.status(400);
        throw new Error("This user is registered!");
    }
    try {

        const ciphertext = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();


        const newUser = await User.create({
            username,
            email,
            password: ciphertext,
            fullname,
            phone,
            profilePic,
            gender,
            isAdmin,
            address,

        })

        if (newUser) {
            res.status(201).json({
                username: newUser.username,
                email: newUser.email,
            });
console.log(newUser);
        }
    } catch (error) {
        console.log(error);
    }
})

//LOGIN
const loginUser = asyncHandler(async (req, res) => {
    try {

        const user = await User.findOne({email:req.body.email});
        !user && res.status(401).json("Wrong password or username!");

        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password &&
        res.status(401).json("Wrong password !");


        const accessToken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn: "50d"}
        );

        const {password, ...info} = user._doc;

        res.status(200).json({...info, accessToken});


    } catch (error) {
        console.log(error);

    }

})

module.exports = {
    registerUser,
    loginUser
}