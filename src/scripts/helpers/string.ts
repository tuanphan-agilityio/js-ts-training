import { REGEX_PATTERN } from '@/constants';

/**
 * Converts a camelCase string to hyphen-case (kebab-case).
 *
 * @param {string} input - The camelCase string to be converted.
 * @returns {string} The converted hyphen-case string.
 */
const camelCaseToHyphenCase = (input: string): string =>
  input.replace(REGEX_PATTERN.CAMEL_CASE_SEPARATOR, '$1-$2').toLowerCase();

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} input - The input string to capitalize.
 * @returns {string} The input string with the first letter capitalized.
 */
const capitalizeFirstLetter = (input: string): string =>
  input.length ? input.charAt(0).toUpperCase() + input.slice(1) : '';

export { camelCaseToHyphenCase, capitalizeFirstLetter };
