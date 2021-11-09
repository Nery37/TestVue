import axios from 'axios';
import router from '@/router';

function basicRequest(config) {
  const newConfig = config;
  const newHeaders = newConfig.headers || {};

  const tokenJson = localStorage.getItem('token');
  if (tokenJson) {
      const token = JSON.parse(tokenJson);
      newHeaders.Authorization = token.access_token;
  }

  newConfig.headers = newHeaders;

  return newConfig;
}

function handleUnauthorized(error) {
  if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      router.push({ name: 'login' });
  }
  return Promise.reject(error);
}

const baseUrl = process.env.VUE_APP_API_URL;
const http = axios.create({
  baseURL: baseUrl + '/api/v1/',
});

//http.interceptors.request.use(basicRequest);
//http.interceptors.response.use(null, handleUnauthorized);

export default http;
