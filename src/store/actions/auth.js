import { SET_USER_INFO, LOG_OUT, SET_USER } from './types';
import axios from '../../axios';
import Swal from 'sweetalert2';
import setErrorText from '../../helpers/setErrorText';

export function loginUser(login, password) {
  return async (dispatch) => {
    try {
      const res = await axios.post('/login', {
        login,
        password,
      });
      dispatch(setUserInfo(res.data.token, res.data.userId));
      const userInfo = {
        token: res.data.token,
        userId: res.data.userId,
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      const response = await axios.get(`/users/${res.data.userId}`);
      localStorage.setItem('user', JSON.stringify(response.data));
      dispatch(setUserAction(response.data));
      Swal.fire({
        icon: 'success',
        title: 'You are successfully logged in',
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (e) {
      setErrorText(e, 'Auth error');
      throw e;
    }
  };
}

export function registerUser(login, password) {
  return async (dispatch) => {
    try {
      const res = await axios.post('/register', {
        login,
        password,
      });
      dispatch(setUserInfo(res.data.token, res.data.userId));
      const userInfo = {
        token: res.data.token,
        userId: res.data.userId,
      };
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      const response = await axios.get(`/users/${res.data.userId}`);
      localStorage.setItem('user', JSON.stringify(response.data));
      dispatch(setUserAction(response.data));
      Swal.fire({
        icon: 'success',
        title: 'Registration complete',
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (e) {
      setErrorText(e, 'Auth error');
      throw e;
    }
  };
}

export function setUserInfo(token, userId) {
  return {
    type: SET_USER_INFO,
    payload: { token, userId },
  };
}

export function logOut() {
  return (dispatch) => {
    localStorage.setItem('userInfo', JSON.stringify({}));
    localStorage.setItem('user', JSON.stringify({}));
    dispatch(logOutAction());
    dispatch(setUserAction({}));
    Swal.fire({
      icon: 'success',
      title: 'You are successfully logged out',
      showConfirmButton: false,
      timer: 2000,
    });
  };
}

export function logOutAction() {
  return {
    type: LOG_OUT,
  };
}

export function setUserAction(user) {
  return {
    type: SET_USER,
    user,
  };
}
