import { GET_USER } from "./types";
import axios from "../../axios";
import setErrorText from "../../helpers/setErrorText";

export function getUser(id) {
  return async dispatch => {
    try {
      const res = await axios.get(`/users/${id}`);
      dispatch(getUserAction(res.data));
    } catch (e) {
      setErrorText(e, "Get user error");
    }
  };
}

export function getUserAction(user) {
  return {
    type: GET_USER,
    user
  };
}
