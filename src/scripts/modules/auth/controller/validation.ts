import { FormError, UserSignIn } from '@/types';
import { validateEmail, validateRequired } from '@/utils';

/**
 * Validates user sign-in data based on the provided user object.
 *
 * @param {Partial<UserSignIn>} user - The user sign-in data to be validated.
 * @returns {FormError} - An object containing validation errors.
 */
const validateSignInForm = (user: Partial<UserSignIn>): FormError => {
  const { email, password } = user;
  const errors: FormError = {};

  // Validate the email field
  const emailError = validateRequired('Email', email) || validateEmail(email);
  if (emailError) {
    errors.email = emailError;
  }

  // Validate the password field
  const passwordError = validateRequired('Password', password);
  if (passwordError) {
    errors.password = passwordError;
  }

  return errors;
};

export default validateSignInForm;
