import { MESSAGES, REGEX_PATTERN } from '@/constants';

/**
 * Checks if a value is considered as required (non-empty).
 *
 * @param {string} value - The value to be checked.
 * @returns {boolean} - True if the value is considered required, otherwise false.
 */
const isRequired = (value: string): boolean => !!value.trim();

/**
 * Validates if a field has a non-empty value.
 *
 * @param {string} field - The name of the field being validated.
 * @param {string} value - The value to be validated.
 * @returns {string | undefined} - An error message if validation fails, otherwise undefined.
 */
const validateRequired = (field: string, value: string = ''): string | undefined =>
  isRequired(value) ? undefined : MESSAGES.REQUIRED(field);

/**
 * Checks if an email address is valid.
 *
 * @param {string} email - The email address to be checked.
 * @returns {boolean} - True if the email address is valid, otherwise false.
 */
const isValidEmail = (email: string): boolean => REGEX_PATTERN.EMAIL.test(email);

/**
 * Validates if an email address is valid.
 *
 * @param {string} email - The email address to be validated.
 * @returns {string | undefined} - An error message if validation fails, otherwise undefined.
 */
const validateEmail = (email: string = ''): string | undefined =>
  isValidEmail(email) ? undefined : MESSAGES.INCORRECT_EMAIL;

export { validateEmail, validateRequired };
