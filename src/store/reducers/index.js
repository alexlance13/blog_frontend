import { combineReducers } from 'redux';
import postsReducer from './posts';
import authReducer from './auth';
import usersReducer from './users';
import commentsReducer from './comments';

export default combineReducers({
  posts: postsReducer,
  auth: authReducer,
  users: usersReducer,
  comments: commentsReducer
});
