//login

const loginStart=()=>({
    type: "LOGIN_START",
});

const loginSuccess=(user)=>({
    type: "LOGIN_SUCCESS",
    payload:user,
});

const loginFailure=()=>({
    type: "LOGIN_FAILURE",
});

//logout

const logout=()=>({
    type: "LOGOUT",
});


export {loginStart, loginFailure, loginSuccess, logout};