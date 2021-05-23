import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://webapp-tiktok-mern-backend.herokuapp.com',
});

export default instance;
