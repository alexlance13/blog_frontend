import axios from 'axios';
require('dotenv').config();

console.log(process.env.REACT_APP_API_URL);

export const options = {
  baseURL: process.env.REACT_APP_API_URL,
};
const instance = axios.create(options);

instance.interceptors.request.use(function(config) {
  let userInfo = localStorage.getItem('userInfo');
  userInfo = JSON.parse(userInfo);
  if (!userInfo.token) return config;
  config.headers = { Authorization: 'Bearer ' + userInfo.token };

  return config;
});

export default instance;
