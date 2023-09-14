import { ROUTES, STORAGE_KEYS } from '@/constants';
import { navigatePage } from '@/helpers';
import { LocalStorage } from '@/utils';
import ROUTES_MAP from './routes';

/**
 * Handle routing based on the provided path name.
 *
 * @param {string} pathName - The path name to handle routing for.
 */
const routeHandler = (pathName: string): void => {
  const isAuthenticated = !!LocalStorage.load(STORAGE_KEYS.ACCESS_TOKEN_KEY);

  // Direct the user to the sign-in page if they are not authenticated.
  if (!isAuthenticated && pathName !== ROUTES.SIGN_IN) {
    navigatePage(ROUTES.SIGN_IN);
  }

  // Forward the user to the dashboard when they are authenticated but attempt to access the sign-in page.
  if (isAuthenticated && pathName === ROUTES.SIGN_IN) {
    navigatePage(ROUTES.DASHBOARD);
  }

  const currentRoute = ROUTES_MAP.find((route) => route.path === pathName);

  if (!currentRoute) {
    navigatePage(ROUTES.NOT_FOUND);
  }

  currentRoute?.handler();
};

export default routeHandler;
