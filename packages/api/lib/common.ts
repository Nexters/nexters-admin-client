import axios from 'axios';

const api = axios.create({
  baseURL: process.env.BASE_URL ?? '',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    accept: 'application/json,',
  },
});

export { api };
