import axios from 'axios';

export const options = {
  baseURL: 'http://localhost:3333/'
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
