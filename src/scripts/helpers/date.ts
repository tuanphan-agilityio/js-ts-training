/**
 * Formats a date string to "mm/dd/yyyy" format.
 * @param {string} dateString - The input date string in "yyyy-mm-dd" format.
 * @returns {string} The formatted date string in "mm/dd/yyyy" format.
 */
const formatDate = (dateString: string): string => {
  const [year, month, day] = dateString.split('-');

  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
};

export { formatDate };
