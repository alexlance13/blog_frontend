import { GET_USER } from "./types";
import axios from "../../axios";

export function getUser(id) {
  return async dispatch => {
    try {
      const res = await axios.get(`/users/${id}`);
      dispatch(getUserAction(res.data));
    } catch (e) {
      console.error("get user error: ", e);
    }
  };
}

export function getUserAction(user) {
  return {
    type: GET_USER,
    user
  };
}
