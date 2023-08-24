import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

import { SERVICE_TIMEOUT, STORAGE_KEYS } from '@/constants';
import { LocalStorage } from '@/utils';
import { handleFulfilled, handleRejected } from './utils';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: SERVICE_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add access token to header
instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${LocalStorage.load(STORAGE_KEYS.ACCESS_TOKEN_KEY)}`;
  return config;
});

// Short response data
instance.interceptors.response.use(handleFulfilled, handleRejected);

export default instance;
