import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { SERVICE_TIMEOUT, STORAGE_KEYS } from '@/constants';
import { LocalStorage } from '@/utils';

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
instance.interceptors.response.use(
  <T>(value: AxiosResponse<T>): Promise<T> => Promise.resolve(value?.data),
  <T>(error: AxiosError<T>): Promise<T> => Promise.reject(error?.response?.data),
);

export default instance;
