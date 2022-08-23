const express = require('express');
const router = express.Router();

const {updateUser, deleteUser, getUser, getAllUsers, getUserStats} = require('../controllers/userController');
const {authMiddleware} = require('../middlewares/authMiddleware');
const {get} = require("mongoose");

router.route('/')
    .get(authMiddleware, getAllUsers);

router.route('/stats')
    .get( getUserStats);

router.route('/:id')
    .put(authMiddleware, updateUser)
    .delete(authMiddleware, deleteUser)
    .get(authMiddleware, getUser);

module.exports = router;

