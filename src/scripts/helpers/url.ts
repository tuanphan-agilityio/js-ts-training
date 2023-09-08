import { QueryParams } from '@/types';

/**
 * Converts an object of query parameters into a URL query string.
 *
 * @param {QueryParams} params - The object containing query parameters.
 * @returns {string} - The generated URL query string.
 */
const convertObjectToURLQueryString = (params: QueryParams): string => {
  const searchParams = new URLSearchParams();

  Object.keys(params).forEach((key) => {
    searchParams.append(key, String(params[key]));
  });

  return searchParams.toString();
};

export { convertObjectToURLQueryString };
