/**
 * Navigate to a specific web page.
 *
 * @param {string} url - The URL of the web page to navigate to.
 * @param {boolean} replace - True to replace the URL in the browser history, false by default.
 */
const navigatePage = (url: string, isReplace: boolean = false): void => {
  const navigationMethod: keyof Location = isReplace ? 'replace' : 'assign';

  window.location[navigationMethod](url);
};

export { navigatePage };
