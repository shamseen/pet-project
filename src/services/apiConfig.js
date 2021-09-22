import axios from 'axios';

const baseUrl =
  process.env.NODE_ENV === 'production'
    ? null
    : 'http://localhost:8000/api';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;