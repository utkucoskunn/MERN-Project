const getListsStart = () => ({
    type: "GET_LISTS_START",
});

const getListsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists,
});

const getListsFailure = () => ({
    type: "GET_LISTS_FAİLURE",
});
//******************************************************************************

const deleteListStart = () => ({
    type: "DELETE_LIST_START",
});

const deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
});

const deleteListFailure = () => ({
    type: "DELETE_LIST_FAİLURE",
});


//*******************************************************************************

const createListStart = () => ({
    type: "CREATE_LIST_START",
});

const createListSuccess = (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list,
});

const createListFailure = () => ({
    type: "CREATE_LIST_FAİLURE",
});

//********************************************************************************
const updateListStart = () => ({
    type: "UPDATE_LIST_START",
});

const updateListSuccess = (list) => ({
    type: "UPDATE_LIST_SUCCESS",
    payload: list,
});

const updateListFailure = () => ({
    type: "UPDATE_LIST_FAİLURE",
});


//*********************************************************************************
export {
    getListsStart, getListsSuccess, getListsFailure,
    deleteListSuccess, deleteListStart, deleteListFailure,
    createListStart, createListSuccess, createListFailure,
    updateListStart,updateListSuccess,updateListFailure,
};