// TODO: Handle routes
import AuthController from './modules/auth/controller';
import AuthModel from './modules/auth/model';
import AuthView from './modules/auth/view';

import DashboardController from './modules/dashboard/controller';

import ProjectListController from './modules/project/list/controller';
import ProjectListModel from './modules/project/list/model';
import ProjectListView from './modules/project/list/view';

import ProjectDetailController from './modules/project/detail/controller';
import ProjectDetailModel from './modules/project/detail/model';
import ProjectDetailView from './modules/project/detail/view';

import ProjectFormController from './modules/project/form/controller';
import ProjectFormModel from './modules/project/form/model';
import ProjectFormView from './modules/project/form/view';

const app = () => {
  // TODO: Handle routes
  // const authModel = new AuthModel();
  // const authView = new AuthView();
  // return new AuthController(authModel, authView);
  // TODO: Handle routes
  // return new DashboardController();

  // const projectListView = new ProjectListView();
  // const projectListModel = new ProjectListModel();
  // return new ProjectListController(projectListModel, projectListView);
  // return new DashboardController();
  // TODO: Handle routes
  // const projectDetailView = new ProjectDetailView();
  // const projectDetailModel = new ProjectDetailModel();
  // return new ProjectDetailController(projectDetailModel, projectDetailView);

  const projectFormModel = new ProjectFormModel();
  const projectFormView = new ProjectFormView();

  return new ProjectFormController(projectFormModel, projectFormView);
};

app();
