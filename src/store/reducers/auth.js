import { SET_USER_INFO } from "../actions/types";

const initialState = {
  userId: "5d9f267255ceaa077986a82c",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3N0cyI6W10sIl9pZCI6IjVkOWYyNjcyNTVjZWFhMDc3OTg2YTgyYyIsImxvZ2luIjoiTHVjaWsiLCJwYXNzd29yZCI6InNoYTEkNzgyYjc1NzAkMSRiMTg2YzUwZGNmNWRhNDY3MWY0MWQ2Y2ExNTFjOTY4OTM1NzY1ZTMzIiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTczMzExNzEyfQ.5D7uUA-KKvvMTpMhy45rI0H94sxjVTpJso8ceT-YRy0"
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
