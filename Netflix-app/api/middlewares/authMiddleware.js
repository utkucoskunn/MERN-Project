const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const authMiddleware = asyncHandler(async (req, res, next) => {
    let encryptedToken;


    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {

            encryptedToken = req.headers.authorization.split(' ')[1];

            const token = jwt.verify(encryptedToken, process.env.SECRET_KEY);

            req.user = await User.findById(token.id);

            next();

        } catch (error) {
            res.status(401);
            console.log(error);
            throw new Error("You are not authenticated!")

        }
    }

    if (!encryptedToken) {

        res.status(403);
        throw new Error("Token is not valid!")
    }

})

module.exports = {
    authMiddleware
}