import axios from "../../axios";
import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_SINGLE_POST_SUCCESS,
  ADD_LIKE,
  REMOVE_LIKE,
  UPDATE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT_ACTION
} from "../actions/types";

export function fetchPosts() {
  return async dispatch => {
    dispatch(fetchPostsStart());
    try {
      const response = await axios.get("/posts");
      dispatch(fetchPostsSuccess(response.data));
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
    try {
      const response = await axios.get(`/posts/${id}`);
      dispatch(fetchSinglePostSuccess(response.data));
    } catch (error) {
      console.error("Fetch single post error", error);
    }
  };
}

export function fetchSinglePostSuccess(singlePost) {
  return {
    type: FETCH_SINGLE_POST_SUCCESS,
    singlePost
  };
}

export function setComment(postId, text) {
  return async dispatch => {
    try {
      const response = await axios.post("/comments", { text, postId });
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

export function removeComment(id) {
  return async dispatch => {
    try {
      const response = await axios.delete(`/comment/${id}`);
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

export function like(postId, isLiked) {
  return async dispatch => {
    const params = { postId };
    const res = await axios.post("/like", params);
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

export function updatePost(title, subtitle, text, postId) {
  return async dispatch => {
    try {
      const params = { title, subtitle, text };
      await axios.put(`/posts/${postId}`, params);
      dispatch(updatePostAction(params));
    } catch (e) {
      console.error("Updating post error ", e);
    }
  };
}

export function updatePostAction(data) {
  return {
    type: UPDATE_POST,
    data
  };
}
export async function createPost(title, subtitle, text) {
  try {
    const params = { title, subtitle, text };
    return await axios.post("/posts/", params);
  } catch (e) {
    console.error("Creating post error ", e);
  }
}

export async function imageUpload(file) {
  try {
    const data = new FormData();
    data.append("pics", file);
    return await axios.post("/upload", data);
  } catch (e) {
    console.error("Image uploading error ", e);
  }
}

export function approvePost(postId) {
  return async dispatch => {
    try {
      const params = { approved: true };
      await axios.put(`/posts/${postId}`, params);
      dispatch(fetchPosts());
    } catch (e) {
      console.log("post approve error ", e);
    }
  };
}

export function removePost(postId) {
  return async dispatch => {
    try {
      await axios.delete(`/posts/${postId}`);
      dispatch(fetchPosts());
    } catch (e) {
      console.log("post approve error ", e);
    }
  };
}
