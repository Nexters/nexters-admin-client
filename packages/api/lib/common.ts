import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL ?? '',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

export { api };
