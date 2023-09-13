const MESSAGES = {
  REQUIRED: (field: string) => `${field} is required`,
  INCORRECT_EMAIL: 'Email is invalid',
  HANDLE_SUCCESS: (field: string) => `${field} is successfully`,
  INVALID_END_DATE: 'End date must be greater than start date',
  INVALID_IMAGE: (field: string) => `${field} must be a image file`,
};

const CONFIRM_MESSAGES = {
  DELETE_PROJECT: 'Do you want to delete this project?',
};

export { MESSAGES, CONFIRM_MESSAGES };
