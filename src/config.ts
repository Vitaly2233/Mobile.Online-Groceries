import axios from 'axios';
import qs from 'qs';

export const host = 'http://192.168.0.101:3028/';

export const api = axios.create({
  baseURL: host,
  paramsSerializer: params => {
    return qs.stringify(params);
  },
  validateStatus() {
    return true;
  },
});
