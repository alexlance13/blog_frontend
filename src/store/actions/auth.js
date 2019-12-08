import { SET_USER_INFO, LOG_OUT, SET_USER } from "./types";
import axios from "../../axios";

export function loginUser(login, password) {
  return async dispatch => {
    try {
      console.log(login, password);
      const res = await axios.post("/login", {
        login,
        password
      });
      dispatch(setUserInfo(res.data.token, res.data.userId));
      const userInfo = {
        token: res.data.token,
        userId: res.data.userId
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      const response = await axios.get(`/users/${res.data.userId}`);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(setUserAction(response.data));
    } catch (e) {
      console.error("auth error: ", e);
    }
  };
}

export function registerUser(login, password) {
  return async dispatch => {
    try {
      const res = await axios.post("/register", {
        login,
        password
      });
      dispatch(setUserInfo(res.data.token, res.data.userId));
      const userInfo = {
        token: res.data.token,
        userId: res.data.userId
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      const response = await axios.get(`/users/${res.data.userId}`);
      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch(setUserAction(response.data));
    } catch (e) {
      console.error("auth error: ", e);
    }
  };
}

export function setUserInfo(token, userId) {
  return {
    type: SET_USER_INFO,
    payload: { token, userId }
  };
}

export function logOut() {
  return dispatch => {
    localStorage.setItem("userInfo", JSON.stringify({}));
    localStorage.setItem("user", JSON.stringify({}));
    dispatch(logOutAction());
    dispatch(setUserAction({}));
  };
}

export function logOutAction() {
  return {
    type: LOG_OUT
  };
}

export function setUserAction(user) {
  return {
    type: SET_USER,
    user
  };
}
