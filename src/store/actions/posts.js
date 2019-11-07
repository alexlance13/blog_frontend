import Axios from "axios";
import { FETCH_POSTS_START, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from "../actions/types";

export function fetchPosts() {
  return async dispatch => {
    dispatch(fetchPostsStart());
    try {
      const response = await Axios.get("http://localhost:3333/posts");
      setTimeout(() => {
        const posts = response.data;
        dispatch(fetchPostsSuccess(posts));
      }, 1000);
    } catch (e) {
      console.error("Fetch posts error", e);
      dispatch(fetchPostsError(e));
    }
  };
}

export function fetchPostsStart() {
  return {
    type: FETCH_POSTS_START
  };
}

export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts
  };
}

export function fetchPostsError(e) {
  return {
    type: FETCH_POSTS_ERROR,
    error: e
  };
}
