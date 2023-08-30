import { LocalStorage, querySelector } from '@/utils';
import { ROUTES, STORAGE_KEYS } from '@/constants';
import { User } from '@/types';
import { generateSidebarTemplate } from '@/templates';
import { navigatePage } from '@/helpers';

/**
 * Renders the sidebar based on the provided current path and user information.
 *
 * @param {string} currentPath - The current path of the application.
 */
const renderSidebar = (currentPath: string) => {
  // Load user information from local storage
  const userInfo = LocalStorage.load<User>(STORAGE_KEYS.USER_INFO_KEY);

  // Select the sidebar element and populate it with the generated template
  const sidebarElement = querySelector('.sidebar');
  sidebarElement.innerHTML = generateSidebarTemplate(userInfo, currentPath);

  // Select the logout button and add a click event listener
  const buttonLogout = querySelector<HTMLButtonElement>('.sidebar-logout');
  if (buttonLogout) {
    buttonLogout.addEventListener('click', () => {
      // Remove access token and user info from local storage
      LocalStorage.remove(STORAGE_KEYS.ACCESS_TOKEN_KEY);
      LocalStorage.remove(STORAGE_KEYS.USER_INFO_KEY);

      // Navigate to the sign-in page
      navigatePage(ROUTES.SIGN_IN, true);
    });
  }
};

export { renderSidebar };
