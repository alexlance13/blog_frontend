import { SET_USER_INFO } from "./types";
import Axios from "axios";

export function loginUser(login, password) {
  return async dispatch => {
    try {
      const res = await Axios.post("http://localhost:3333/login", {
        login,
        password
      });
      dispatch(setUserInfo(res.data.token, res.data.userId));
    } catch (e) {
      console.error("auth error: ", e);
    }
  };
}

export function registerUser(login, password) {
  return async dispatch => {
    try {
      const res = await Axios.post("http://localhost:3333/register", {
        login,
        password
      });
      dispatch(setUserInfo(res.data.token, res.data.userId));
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
