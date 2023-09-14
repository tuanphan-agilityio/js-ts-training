import { ROUTES } from '@/constants';

// Auth
import AuthController from '@/modules/auth/controller';
import AuthModel from '@/modules/auth/model';
import AuthView from '@/modules/auth/view';

// Dashboard
import DashboardController from '@/modules/dashboard/controller';

// Project list
import ProjectListController from '@/modules/project/list/controller';
import ProjectListView from '@/modules/project/list/view';
import ProjectListModel from '@/modules/project/list/model';

// Project Create Update
import ProjectFormController from '@/modules/project/form/controller';
import ProjectFormView from '@/modules/project/form/view';
import ProjectFormModel from '@/modules/project/form/model';

// Project Detail
import ProjectDetailController from '@/modules/project/detail/controller';
import ProjectDetailView from '@/modules/project/detail/view';
import ProjectDetailModel from '@/modules/project/detail/model';

const ROUTES_MAP = [
  {
    path: ROUTES.SIGN_IN,
    handler: () => {
      const authModel = new AuthModel();
      const authView = new AuthView();

      return new AuthController(authModel, authView);
    },
  },
  {
    path: ROUTES.DASHBOARD,
    handler: () => new DashboardController(),
  },
  {
    path: ROUTES.PROJECTS,
    handler: () => {
      const projectListView = new ProjectListView();
      const projectListModel = new ProjectListModel();

      return new ProjectListController(projectListModel, projectListView);
    },
  },
  {
    path: ROUTES.PROJECTS_FORM,
    handler: () => {
      const projectFormView = new ProjectFormView();
      const projectFormModel = new ProjectFormModel();

      return new ProjectFormController(projectFormModel, projectFormView);
    },
  },
  {
    path: ROUTES.PROJECTS_DETAIL,
    handler: () => {
      const projectDetailView = new ProjectDetailView();
      const projectDetailModel = new ProjectDetailModel();

      return new ProjectDetailController(projectDetailModel, projectDetailView);
    },
  },
];

export default ROUTES_MAP;
