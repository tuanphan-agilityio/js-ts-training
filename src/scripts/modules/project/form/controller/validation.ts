import { FormError, ProjectFormInputs } from '@/types';
import { validateImage, validateEndDate, validateRequired } from '@/utils';

/**
 * Validates the project form data and returns a map of form errors.
 *
 * @param formData - The data submitted in the project form.
 * @returns A map of form errors, if any.
 */
const validateProjectForm = (formData: ProjectFormInputs) => {
  const { name, client, projectManagerId, status, startDate, endDate, logo } = formData;

  const errors: FormError = {};

  // Validate the name field
  const nameError = validateRequired('Name', name);
  if (nameError) {
    errors.name = nameError;
  }

  // Validate the client field
  const clientError = validateRequired('Client', client);
  if (clientError) {
    errors.client = clientError;
  }

  // Validate the project manager field
  const projectManagerIdError = validateRequired('Project Manager', projectManagerId);
  if (projectManagerIdError) {
    errors.projectManagerId = projectManagerIdError;
  }

  // Validate the status field
  const statusError = validateRequired('Status', status);
  if (statusError) {
    errors.status = statusError;
  }

  // Validate the start date field
  const startDateError = validateRequired('Start date', startDate);
  if (startDateError) {
    errors.startDate = startDateError;
  }

  // Validate the end date field
  const endDateError = !startDateError && validateEndDate(new Date(startDate), new Date(endDate));
  if (endDateError) {
    errors.endDate = endDateError;
  }

  // Validate the logo field
  const logoError = logo ? validateImage('Logo', logo) : '';
  if (logoError) {
    errors.logo = logoError;
  }

  return errors;
};

export default validateProjectForm;
