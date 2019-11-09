import axios from "../../axios";
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

export function fetchPosts() {
  return async dispatch => {
    dispatch(fetchPostsStart());
    try {
      const response = await axios.get("/posts");
      setTimeout(() => {
        dispatch(fetchPostsSuccess(response.data));
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

export function fetchSinglePost(id) {
  return async dispatch => {
    dispatch(fetchSinglePostStart());
    try {
      const response = await axios.get(`/posts/${id}`);
      dispatch(fetchSinglePostSuccess(response.data));
    } catch (error) {
      console.error("Fetch single post error", error);
      dispatch(fetchSinglePostError(error));
    }
  };
}

export function fetchSinglePostStart() {
  return {
    type: FETCH_SINGLE_POST_START,
    loading: true
  };
}

export function fetchSinglePostSuccess(singlePost) {
  return {
    type: FETCH_SINGLE_POST_SUCCESS,
    singlePost
  };
}

export function fetchSinglePostError(error) {
  return {
    type: FETCH_SINGLE_POST_ERROR,
    error
  };
}

export function setComment(postId, text, token) {
  return async dispatch => {
    try {
      const headers = {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      };
      const response = await axios.post("/comment", { text, postId }, { headers });
      dispatch(addComment(response.data));
    } catch (e) {
      console.error("Sending comment error:", e);
    }
  };
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment
  };
}

export function removeComment(id, token) {
  return async dispatch => {
    try {
      const headers = {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      };
      const response = await axios.delete(`/comment/${id}`, { headers });
      dispatch(removeCommentAction(response.data));
    } catch (e) {
      console.error("Remove comment error", e);
    }
  };
}

export function removeCommentAction(comment) {
  return {
    type: REMOVE_COMMENT_ACTION,
    comment
  };
}

export function like(postId, token, isLiked) {
  return async dispatch => {
    const params = { postId };
    const config = {
      headers: { "content-type": "application/json", authorization: `Bearer ${token}` }
    };
    const res = await axios.post("/like", params, config);
    isLiked ? dispatch(removeLike(res.data)) : dispatch(addLike(res.data));
  };
}

export function addLike(like) {
  return {
    type: ADD_LIKE,
    like
  };
}

export function removeLike(like) {
  return {
    type: REMOVE_LIKE,
    like
  };
}
