import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_SINGLE_POST_START,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_ERROR,
  ADD_COMMENT,
  REMOVE_COMMENT_ACTION,
  ADD_LIKE,
  REMOVE_LIKE
} from "../actions/types";

const initialState = {
  posts: [],
  singlePost: {},
  loading: false,
  error: null
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case FETCH_SINGLE_POST_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_SINGLE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        singlePost: action.singlePost
      };
    case FETCH_SINGLE_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case ADD_COMMENT:
      const comments = state.singlePost.comments.slice();
      comments.push(action.comment);
      return {
        ...state,
        singlePost: { ...state.singlePost, comments }
      };
    case REMOVE_COMMENT_ACTION:
      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          comments: state.singlePost.comments.filter(comment => comment._id !== action.comment._id)
        }
      };
    case ADD_LIKE:
      const likes = state.singlePost.likes.slice();
      likes.push(action.like);
      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          likes
        }
      };
    case REMOVE_LIKE:
      return {
        ...state,
        singlePost: {
          ...state.singlePost,
          likes: state.singlePost.likes.filter(like => like._id !== action.like._id)
        }
      };
    default:
      return state;
  }
}
