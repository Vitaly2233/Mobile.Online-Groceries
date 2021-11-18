import axios from 'axios';
import qs from 'qs';

export const host = 'https://6eff-37-55-116-204.ngrok.io/';

export const api = axios.create({
  baseURL: host,
  paramsSerializer: params => {
    return qs.stringify(params);
  },
  validateStatus() {
    return true;
  },
});
