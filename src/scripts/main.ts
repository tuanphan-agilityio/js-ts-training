// TODO: Handle routes
import AuthController from './modules/auth/controller';
import AuthModel from './modules/auth/model';
import AuthView from './modules/auth/view';

const app = () => {
  const authModel = new AuthModel();
  const authView = new AuthView();
  return new AuthController(authModel, authView);
};

app();
