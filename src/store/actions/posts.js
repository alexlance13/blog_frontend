import axios from "../../axios";
import Swal from "sweetalert2";
import setErrorText from "../../helpers/setErrorText";
import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
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
      setErrorText(e, "Fetch posts error");
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

export function fetchSinglePost(id) {
  return async dispatch => {
    try {
      const response = await axios.get(`/posts/${id}`);
      dispatch(fetchSinglePostSuccess(response.data));
    } catch (e) {
      setErrorText(e, "Fetch single post error");
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
      Swal.fire({
        icon: "success",
        title: "Your comment is on check by admin",
        showConfirmButton: false,
        timer: 2000
      });
    } catch (e) {
      setErrorText(e, "Sending comment error");
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
      setErrorText(e, "Remove comment error");
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
      Swal.fire({
        icon: "success",
        title: "Your post is on check by admin",
        showConfirmButton: false,
        timer: 2000
      });
    } catch (e) {
      setErrorText(e, "Updating post error");
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
    const res = await axios.post("/posts/", params);
    Swal.fire({
      icon: "success",
      title: "Your post is on check by admin",
      showConfirmButton: false,
      timer: 2000
    });
    return res;
  } catch (e) {
    setErrorText(e, "Creating post error");
  }
}

export async function imageUpload(file) {
  try {
    const data = new FormData();
    data.append("pics", file);
    return await axios.post("/upload", data);
  } catch (e) {
    setErrorText(e, "Image uploading error");
  }
}

export function approvePost(postId) {
  return async dispatch => {
    try {
      const params = { approved: true };
      await axios.put(`/posts/${postId}`, params);
      dispatch(fetchPosts());
    } catch (e) {
      setErrorText(e, "Post approve error");
    }
  };
}

export function removePost(postId) {
  return async dispatch => {
    try {
      await axios.delete(`/posts/${postId}`);
      dispatch(fetchPosts());
      Swal.fire({
        icon: "success",
        title: "This post is successfully removed",
        showConfirmButton: false,
        timer: 2000
      });
    } catch (e) {
      setErrorText(e, "Post remove error");
    }
  };
}
