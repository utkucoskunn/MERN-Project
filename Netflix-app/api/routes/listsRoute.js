const express = require('express');
const router = express.Router();

const {authMiddleware} = require('../middlewares/authMiddleware');
const {getList, deleteList, createList}=require('../controllers/listController');

router.route('/')
    .post(authMiddleware,createList)
    .get(authMiddleware, getList)


router.route('/:id')
    .delete(authMiddleware,deleteList)

module.exports = router;