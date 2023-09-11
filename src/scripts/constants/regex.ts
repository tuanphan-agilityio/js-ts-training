const REGEX_PATTERN = {
  EMAIL:
    /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/,
  BASE64_DATA_URI: (format: string): RegExp =>
    new RegExp(`^data:${format};base64,([A-Za-z0-9+/]+={0,2})$`),
  CAMEL_CASE_SEPARATOR: /([a-z])([A-Z])/g,
};

export { REGEX_PATTERN };
