/**
 * Checks if a value is empty (null, undefined, or an object with no keys).
 * @param val - The value to be checked.
 * @returns `true` if the value is considered empty, otherwise `false`.
 */
const isEmpty = (val: Record<string, unknown> | null | undefined): boolean => {
  // Check if the value is null or undefined
  if (val === null || val === undefined) {
    return true;
  }

  // Check if the value is an object and has no keys
  if (typeof val === 'object') {
    return Object.keys(val).length === 0;
  }

  // Otherwise, the value is not empty
  return false;
};

export { isEmpty };
