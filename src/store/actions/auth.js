import { SET_USER_INFO, LOG_OUT } from "./types";
import axios from "../../axios";

export function loginUser(login, password) {
  return async dispatch => {
    try {
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
    localStorage.setItem("userInfo", {});
    dispatch(logOutAction());
  };
}

export function logOutAction() {
  return {
    type: LOG_OUT
  };
}
