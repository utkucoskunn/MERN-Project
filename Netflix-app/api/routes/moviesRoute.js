const express = require('express');
const router = express.Router();

const {authMiddleware} = require('../middlewares/authMiddleware');
const {
    createMovies,
    updateMovies,
    deleteMovies,
    getMovie,
    getRandomMovie,
    getAllMovies
} = require('../controllers/movieController');


router.route('/')
    .post(authMiddleware, createMovies);

router.route('/random')
    .get(authMiddleware, getRandomMovie);

router.route('/find/:id')
    .get(authMiddleware, getMovie);

router.route('/all')
    .get(authMiddleware, getAllMovies);

router.route('/:id')
    .put(authMiddleware, updateMovies)
    .delete(authMiddleware, deleteMovies)


module.exports = router;