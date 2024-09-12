import axios from 'axios';
import { SERVER_HOST } from '../consts';

const api = axios.create({
  baseURL: SERVER_HOST,
  headers: {
    'Content-type': 'application/json',
  },

});

export { api };
