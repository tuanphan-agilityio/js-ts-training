import { Toast, renderSidebar } from '@/utils';
import ProjectListModel from '../model';
import ProjectListView from '../view';

class ProjectListController {
  private model: ProjectListModel;
  private view: ProjectListView;
  private toast = new Toast();

  constructor(model: ProjectListModel, view: ProjectListView) {
    this.model = model;
    this.view = view;
    this.configureView();
    this.init();
  }

  /**
   * Configures the view by rendering the sidebar.
   */
  private configureView = () => {
    renderSidebar(window.location.pathname);
  };

  /**
   * Initializes the controller by fetching and rendering the project list.
   */
  private init = async () => {
    try {
      await this.loadAndRenderProjects();
    } catch (error: unknown) {
      this.handleError(error);
    }
  };

  /**
   * Load and render projects.
   */
  private loadAndRenderProjects = async () => {
    const projectList = await this.model.getProjects('');
    this.view.renderProjectList(projectList);
  };

  /**
   * Handles and displays errors using the Toast utility.
   *
   * @param {unknown} error - The error to be displayed.
   */
  private handleError = (error: unknown) => {
    this.toast.error(error as string);
  };
}

export default ProjectListController;
