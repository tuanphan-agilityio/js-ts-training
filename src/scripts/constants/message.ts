const MESSAGES = {
  REQUIRED: (field: string) => `${field} is required`,
  INCORRECT_EMAIL: 'Email is invalid',
  HANDLE_SUCCESS: (field: string) => `${field} is successfully`,
};

const CONFIRM_MESSAGES = {
  DELETE_PROJECT: 'Do you want to delete this project?',
};

export { MESSAGES, CONFIRM_MESSAGES };
