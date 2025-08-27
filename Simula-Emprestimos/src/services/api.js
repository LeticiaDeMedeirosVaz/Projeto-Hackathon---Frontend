import axios from 'axios';


const api = axios.create({
  baseURL: 'http://10.75.161.55:3000',
  timeout: 10000,
});

export default api;