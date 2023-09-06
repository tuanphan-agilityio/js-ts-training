// TODO: Handle routes
import AuthController from './modules/auth/controller';
import AuthModel from './modules/auth/model';
import AuthView from './modules/auth/view';

import DashboardController from './modules/dashboard/controller';

import ProjectListModel from './modules/project/list/model/index';
import ProjectListController from './modules/project/list/controller/index';
import ProjectListView from './modules/project/list/view';

const app = () => {
  // TODO: Handle routes
  // const authModel = new AuthModel();
  // const authView = new AuthView();
  // return new AuthController(authModel, authView);

  // TODO: Handle routes
  // return new DashboardController();

  const projectListView = new ProjectListView();
  const projectListModel = new ProjectListModel();
  return new ProjectListController(projectListModel, projectListView);
};

app();
