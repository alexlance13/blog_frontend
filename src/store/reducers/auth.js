import { SET_USER_INFO, LOG_OUT } from "../actions/types";

let userInfo = localStorage.getItem("userInfo");
let userId,
  token = "";
let isLoggedIn = false;

try {
  userInfo = JSON.parse(userInfo);
  userId = userInfo.userId;
  token = userInfo.token;
  isLoggedIn = true;
} catch (e) {}

const initialState = {
  userId,
  token,
  isLoggedIn
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token,
        isLoggedIn: true
      };
    case LOG_OUT:
      return {
        ...state,
        userId: "",
        token: "",
        isLoggedIn: false
      };
    default:
      return state;
  }
}
