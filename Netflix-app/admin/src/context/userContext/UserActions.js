const getUsersStart = () => ({
    type: "GET_USERS_START",
});

const getUsersSuccess = (users) => ({
    type: "GET_USERS_SUCCESS",
    payload: users,
});

const getUsersFailure = () => ({
    type: "GET_USERS_FAİLURE",
});

//****************************************************************************************************************
//*******************************************************************************

const createUserStart = () => ({
    type: "CREATE_USER_START",
});

const createUserSuccess = (user) => ({
    type: "CREATE_USER_SUCCESS",
    payload: user,
});

const createUserFailure = () => ({
    type: "CREATE_USER_FAILURE",
});

//******************************************************************************
const deleteUserStart = () => ({
    type: "DELETE_USER_START",
});

const deleteUserSuccess = (id) => ({
    type: "DELETE_USER_SUCCESS",
    payload: id,
});

const deleteUserFailure = () => ({
    type: "DELETE_USER_FAILURE",
});
export {
    getUsersStart, getUsersSuccess, getUsersFailure,
    createUserStart, createUserSuccess, createUserFailure,
    deleteUserStart, deleteUserSuccess, deleteUserFailure,
};