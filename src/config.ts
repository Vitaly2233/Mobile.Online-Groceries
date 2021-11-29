import axios from 'axios';
import qs from 'qs';

export const host = 'https://38f4-185-41-193-173.ngrok.io/';

export const api = axios.create({
  baseURL: host,
  paramsSerializer: params => {
    return qs.stringify(params);
  },
  validateStatus() {
    return true;
  },
});
