import { GET_COMMENTS, REMOVE_COMMENT, APPROVE_COMMENT } from '../actions/types';

const initialState = {
  comments: []
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.comments
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment._id !== action.id)
      };
    case APPROVE_COMMENT:
      let comments = state.comments.map(comment => {
        if (comment._id === action.id) comment.approved = true;
        return comment;
      });
      return {
        ...state,
        comments
      };
    default:
      return state;
  }
}
