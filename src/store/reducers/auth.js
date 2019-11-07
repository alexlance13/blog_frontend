import { SET_USER_INFO } from "../actions/types";

const initialState = {
  userId: "",
  token: ""
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userId: action.payload.userId,
        token: action.payload.token
      };
    default:
      return state;
  }
}
