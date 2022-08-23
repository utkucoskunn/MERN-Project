import {
    getListsStart, getListsSuccess, getListsFailure,
    deleteListStart, deleteListSuccess, deleteListFailure,
    createListStart, createListSuccess, createListFailure,

} from './ListActions';
import axios from "axios";


const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get("/lists", {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(getListsSuccess(res.data));
    } catch (error) {
        dispatch(getListsFailure());
    }
}

//Create
const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {
        const res = await axios.post("/lists", list, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(createListSuccess(res.data));
    } catch (error) {
        dispatch(createListFailure());
    }
}

//Delete
const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete("/lists/" + id, {
            headers: {
                Authorization: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
            },
        });
        dispatch(deleteListSuccess(id));
    } catch (error) {
        dispatch(deleteListFailure());
    }
}

export {getLists, deleteList, createList};

