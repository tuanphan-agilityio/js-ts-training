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

/**
 * Extracts the value of a parameter from a URL.
 *
 * @param paramName - The name of the parameter to extract.
 * @param url - The URL to extract from (optional, defaults to the current URL).
 * @returns The value of the parameter if it exists, or null if it doesn't.
 */
const extractParamFromUrlByKey = (
  paramName: string,
  url: string = window.location.href,
): string | null => {
  const urlObject = new URL(url);

  return urlObject.searchParams.get(paramName);
};

/**
 * Generate a URL with query parameters from a base path and a dictionary of query parameters.
 *
 * @param {string} basePath - The base path of the URL.
 * @param {Record<string, string>} queryParams - A dictionary of query parameters.
 * @returns {string} The complete URL with the query string.
 */
const generateUrlWithQueryParams = (
  basePath: string,
  queryParams: Record<string, string | number>,
): string => {
  if (Object.keys(queryParams).length === 0) {
    return basePath;
  }

  const queryString = convertObjectToURLQueryString(queryParams);

  return `${basePath}?${queryString}`;
};

export { convertObjectToURLQueryString, extractParamFromUrlByKey, generateUrlWithQueryParams };
