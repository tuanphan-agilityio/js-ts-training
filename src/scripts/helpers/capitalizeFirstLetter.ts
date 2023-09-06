/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} input - The input string to capitalize.
 * @returns {string} The input string with the first letter capitalized.
 */
const capitalizeFirstLetter = (input: string): string =>
  input.length ? input.charAt(0).toUpperCase() + input.slice(1) : '';

export { capitalizeFirstLetter };
