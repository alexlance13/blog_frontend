import axios from '../../axios';
import { GET_COMMENTS, REMOVE_COMMENT, APPROVE_COMMENT } from './types';

export function getCommentsAction(comments) {
  return {
    type: GET_COMMENTS,
    comments,
  };
}

export function getComments() {
  return async (dispatch) => {
    try {
      const res = await axios.get('/comments');
      dispatch(getCommentsAction(res.data));
    } catch (e) {
      console.error('get all comments error: ', e);
    }
  };
}

export function removeCommentAction(id) {
  return {
    type: REMOVE_COMMENT,
    id,
  };
}

export function removeCommentFromAdminHandler(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`/comment/${id}`);
      dispatch(removeCommentAction(id));
    } catch (e) {
      console.error('Remove comment error', e);
    }
  };
}

export function approveCommentAction(id) {
  return {
    type: APPROVE_COMMENT,
    id,
  };
}

export function approveComment(id) {
  return async (dispatch) => {
    try {
      await axios.put(`/comment/${id}`, {});
      dispatch(approveCommentAction(id));
    } catch (e) {
      console.error('Approve comment error', e);
    }
  };
}
