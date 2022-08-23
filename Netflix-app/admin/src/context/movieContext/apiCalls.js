import {
    getMoviesStart, getMoviesSuccess, getMoviesFailure,
    deleteMovieStart, deleteMovieSuccess, deleteMovieFailure,
    createMovieStart, createMovieSuccess, createMovieFailure,
} from './MovieActions';
import axios from "axios";


const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("/movies/all", {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch (error) {
        dispatch(getMoviesFailure());
    }
}

//Create
const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    console.log(movie)
    console.log("Bearer " + JSON.parse(localStorage.getItem("user")).accessToken);
    try {

        const res = await axios.post("/movies", movie, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });

        dispatch(createMovieSuccess(res.data));
    } catch (error) {
        dispatch(createMovieFailure());
    }
}

//Delete
const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axios.delete("/movies/" + id, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(deleteMovieSuccess(id));
    } catch (error) {
        dispatch(deleteMovieFailure());
    }
}

export {getMovies, deleteMovie, createMovie};

