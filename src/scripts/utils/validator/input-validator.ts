import { IMAGE_FORMATS, MESSAGES, REGEX_PATTERN } from '@/constants';

/**
 * Checks if a value is considered as required (non-empty).
 *
 * @param {string} value - The value to be checked.
 * @returns {boolean} - True if the value is considered required, otherwise false.
 */
const isRequired = (value: string): boolean => !!value?.trim();

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

/**
 * Checks if a date is valid (not an invalid or NaN date).
 *
 * @param {Date} date - The date to be checked.
 * @returns {boolean} - True if the date is valid, otherwise false.
 */
const isValidDate = (date: Date): boolean => !Number.isNaN(date.getTime());

/**
 * Compares if the end date is greater than the start date.
 *
 * @param {Date} startDate - The start date.
 * @param {Date} endDate - The end date.
 * @returns {boolean} - True if the end date is greater than the start date, otherwise false.
 */
const isEndDateGreaterThanStartDate = (startDate: Date, endDate: Date): boolean =>
  startDate.getTime() < endDate.getTime();

/**
 * Validates if the end date is greater than the start date.
 *
 * @param {Date} startDate - The start date.
 * @param {Date} endDate - The end date.
 * @returns {string | undefined} - An error message if validation fails, otherwise undefined.
 */
const validateEndDate = (startDate: Date, endDate: Date): string | undefined => {
  if (!isValidDate(startDate) || !isValidDate(endDate)) {
    return undefined;
  }

  if (!isEndDateGreaterThanStartDate(startDate, endDate)) {
    return MESSAGES.INVALID_END_DATE;
  }

  return undefined;
};

/**
 * Checks if a string is a valid Base64-encoded image.
 *
 * @param {string} base64String - The input string to check.
 * @returns {boolean} `true` if the input is a valid Base64-encoded image, `false` otherwise.
 */
const isBase64Image = (base64String: string): boolean =>
  IMAGE_FORMATS.some((format) => {
    const regex = REGEX_PATTERN.BASE64_DATA_URI(format);

    return regex.test(base64String);
  });

/**
 * Validates an image represented as a Base64-encoded string.
 *
 * @param {string} field - The name or description of the image field.
 * @param {string} image - The Base64-encoded image string to validate.
 * @returns {string | undefined} An error message if the image is invalid, `undefined` if valid.
 */
const validateImage = (field: string, image: string): string | undefined =>
  isBase64Image(image) ? undefined : MESSAGES.INVALID_IMAGE(field);

export {
  validateEmail,
  validateRequired,
  validateEndDate,
  isValidDate,
  validateImage,
  isBase64Image,
};
