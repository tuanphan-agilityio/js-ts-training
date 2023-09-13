import { AxiosResponse, AxiosError } from 'axios';

/**
 * Handles a fulfilled Axios response by resolving with the response data.
 *
 * @param {AxiosResponse<T>} value - The Axios response object.
 * @returns {Promise<T>} - A promise that resolves with the response data.
 */
const handleFulfilled = <T>(value: AxiosResponse<T>): Promise<T> => Promise.resolve(value?.data);

/**
 * Handles a rejected Axios error by rejecting with the response data if available.
 *
 * @param {AxisError<T>} error - The Axios error object.
 * @returns {Promise<T>} - A promise that rejects with the error response data.
 */
const handleRejected = <T>(error: AxiosError<T>): Promise<T> =>
  Promise.reject(error?.response?.data);

export { handleFulfilled, handleRejected };
