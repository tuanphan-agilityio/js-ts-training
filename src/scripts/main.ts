// TODO: Handle routes
import AuthController from './modules/auth/controller';
import AuthModel from './modules/auth/model';
import AuthView from './modules/auth/view';

import DashboardController from './modules/dashboard/controller';

const app = () => {
  // TODO: Handle routes
  // const authModel = new AuthModel();
  // const authView = new AuthView();
  // return new AuthController(authModel, authView);
  return new DashboardController();
};

app();
