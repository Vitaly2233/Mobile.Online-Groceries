import axios from 'axios';
import qs from 'qs';

export const host = 'https://9ebc-217-115-97-48.ngrok.io/';

export const api = axios.create({
  baseURL: host,
  paramsSerializer: params => {
    return qs.stringify(params);
  },
  validateStatus() {
    return true;
  },
});
