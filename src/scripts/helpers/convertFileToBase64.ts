/**
 * Converts a File object to a Base64 string.
 *
 * This function reads the contents of the provided File and returns its data as a Base64-encoded string.
 *
 * @param {File} file - The File object to be converted.
 * @returns {Promise<string>} A Promise that resolves with the Base64-encoded string.
 */
const convertFileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      if (event.target && event.target.result) {
        const base64Data = event.target.result as string;
        resolve(base64Data);
      }
    };

    reader.readAsDataURL(file);
  });

export { convertFileToBase64 };
