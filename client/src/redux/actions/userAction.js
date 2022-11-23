import axios from "axios";
const server = "http://localhost:5001/";

export const userActionsignup = (user, email, password) => async (dispatch) => {
    dispatch({ type: "SIGNUP_USER_REQUEST" })
    try {
        const res = await axios.post(server + "api/auth/signup", {
            name: user,
            email: email,
            password: password
        });
        dispatch({
            type: "SIGNUP_USER_SUCCESS",
            payload: res.data
        })
        if (res.data.authTocken) {
            localStorage.setItem('authTocken', res.data.authTocken);
        }
    } catch (error) {
        dispatch({
            type: "SIGNUP_USER_FAIL", payload: error
        });
    }

}
export const userActionlogin = (email, password) => async (dispatch) => {
    dispatch({ type: "LOGIN_USER_REQUEST" })
    try {
        const res = await axios.post(server + "api/auth/login", {
            email: email,
            password: password
        });
        dispatch({
            type: "LOGIN_USER_SUCCESS",
            payload: res.data
        })
        if(res.data.authTocken){
            localStorage.setItem('authTocken', res.data.authTocken);
        }
    } catch (error) {
        dispatch({
            type: "LOGIN_USER_FAIL", payload: error
        });
    }

}

