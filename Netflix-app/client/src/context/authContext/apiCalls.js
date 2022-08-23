import axios from 'axios';
import {loginFailure, loginStart, loginSuccess} from "./AuthActions";


const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("auth/login", user);
        dispatch(loginSuccess(res.data));

    } catch (error) {
        dispatch(loginFailure());
    }
};

const emailCheck = async (email) => {

    try {
        const res = await axios.get("/users/", {
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjc0OTQ2MWFhZGQ4ZjRhYTI3MTA2NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDQ3NzM5MSwiZXhwIjoxNjY0Nzk3MzkxfQ.7-gK1o8qHxm4M2ktW5Z9Tx-pA_32E2fSVgJ-kIDcpmw"
            },
        });

        const emailCheckResult = res.data.filter(user => user.email === email);

        return (
            emailCheckResult
        )


    } catch (error) {
        console.log(error);
    }


}

export {login, emailCheck};