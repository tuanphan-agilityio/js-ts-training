import { getElementById, querySelectorAll } from '..';
import { FormError } from '@/types';

/**
 * Clears error messages in a form.
 */
const clearFormErrors = () => {
  const errorElements = querySelectorAll('.input-error');

  errorElements.forEach((element) => {
    element.innerText = '';
  });
};

/**
 * Displays input errors in a form.
 *
 * @param {FormError} error - The error message object containing field and message pairs.
 */
const showFormErrors = (error: FormError) => {
  clearFormErrors();

  Object.entries(error).forEach(([key, value]) => {
    const target = getElementById(`${key}-error`);

    if (target) {
      target.innerText = value;
    }
  });
};

export { showFormErrors, clearFormErrors };
