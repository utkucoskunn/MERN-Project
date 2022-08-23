import {
    getUsersStart, getUsersSuccess, getUsersFailure,
    createUserStart, createUserSuccess, createUserFailure,
    deleteUserStart,deleteUserSuccess,deleteUserFailure,
} from './UserActions'
import axios from "axios";


const getUsers = async (dispatch) => {
    dispatch(getUsersStart());
    try {
        const res = await axios.get("/users/", {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(getUsersSuccess(res.data));
    } catch (error) {
        dispatch(getUsersFailure());
    }
}

//Create
const createUser = async (user, dispatch) => {

    dispatch(createUserStart());
    try {
        const res = await axios.post("/auth/register", user, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(createUserSuccess(res.data));
    } catch (error) {
        dispatch(createUserFailure());
    }
}

//Delete
const deleteMovie = async (id, dispatch) => {
    dispatch(deleteUserStart());

    try {
        await axios.delete("/users/" + id, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(deleteUserSuccess(id));
    } catch (error) {
        dispatch(deleteUserFailure());
    }
}

export {getUsers, createUser, deleteMovie};

