const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const CryptoJS = require("crypto-js");


//UPDATE
const updateUser = asyncHandler(async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                {new: true}
            );
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You can update your account!");
    }
})

//DELETE
const deleteUser = asyncHandler(async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({
                "message": `${req.user.username} has been deleted!`
            })
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You can delete only your account!");
    }
});

//GET
const getUser = asyncHandler(async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const {password, email, ...info} = user._doc;
        res.status(200).json(info);

    } catch (error) {
        res.status(500).json(error);
    }
});

//GET ALL
const getAllUsers = asyncHandler(async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You are not allowed to see all users!");
    }
});

//GET USER STATS

const getUserStats = asyncHandler(async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: {$month: "$createdAt"},
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1},
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getAllUsers,
    getUserStats
}


