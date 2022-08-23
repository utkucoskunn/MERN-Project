const Movie = require('../models/Movie');
const asyncHandler = require('express-async-handler');

//CREATE

const createMovies = async (req, res) => {

    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try {
            const savedMovie = await newMovie.save();

            res.status(201).json(savedMovie);
        } catch (error) {
            res.status(500).json(error);

        }

    } else {
        res.status(403).json("You are not allowed create movies!");
    }
}

//UPDATE

const updateMovies = asyncHandler(async (req, res) => {

    if (req.user.isAdmin) {
        try {
            const updateMovie = await Movie.findByIdAndUpdate(req.params.id, {
                    $set: req.body,
                },
                {new: true}
            );
            res.status(201).json(updateMovie);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You are not allowed update movies!");
    }
})

//DELETE

const deleteMovies = asyncHandler(async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findOneAndDelete(req.params.id);
            res.status(200).json({
                "message": `Movie has been deleted!`
            })
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You are not allowed delete movies!");
    }
})

//GET
const getMovie = asyncHandler(async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        const {...info} = movie._doc;
        res.status(200).json(info);
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET RANDOM

const getRandomMovie = asyncHandler(async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                {$match: {isSeries: true}},
                {$sample: {size: 1}},
            ]);
        } else {
            movie = await Movie.aggregate([
                {$match: {isSeries: true}},
                {$sample: {size: 1}},
            ]);
        }
        res.status(200).json(movie);
    } catch (error) {
        res.status(500).json(error);
    }
})

//GET ALL
const getAllMovies = asyncHandler(async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});


module.exports = {
    createMovies,
    updateMovies,
    deleteMovies,
    getMovie,
    getRandomMovie,
    getAllMovies
}