import { REGEX_PATTERN } from '@/constants';

/**
 * Converts a camelCase string to hyphen-case (kebab-case).
 *
 * @param {string} input - The camelCase string to be converted.
 * @returns {string} The converted hyphen-case string.
 */
const camelCaseToHyphenCase = (input: string): string =>
  input.replace(REGEX_PATTERN.CAMEL_CASE_SEPARATOR, '$1-$2').toLowerCase();

export { camelCaseToHyphenCase };
