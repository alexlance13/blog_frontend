import { SET_USER_INFO, LOG_OUT, SET_USER } from "../actions/types";

let userInfo = localStorage.getItem("userInfo");
userInfo = JSON.parse(userInfo) || {};
let user = localStorage.getItem("user");
user = JSON.parse(user) || {};

const initialState = {
  userId: userInfo.userId,
  token: userInfo.token,
  isLoggedIn: !!userInfo.token,
  user
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
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
