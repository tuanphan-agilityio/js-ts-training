import { Toast, renderSidebar, showConfirmPopup } from '@/utils';
import ProjectListModel from '../model';
import ProjectListView from '../view';
import { CONFIRM_MESSAGES } from '@/constants';

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

    if (projectList.length > 0) {
      this.view.bindDeleteEvent(this.handleDeleteProject);
    }
  };

  /**
   * Handles and displays errors using the Toast utility.
   *
   * @param {unknown} error - The error to be displayed.
   */
  private handleError = (error: unknown) => {
    this.toast.error(error as string);
  };

  /**
   * Handles the deletion of a project.
   *
   * @param {number} projectId - The ID of the project to be deleted.
   */
  private handleDeleteProject = (projectId: number) => {
    showConfirmPopup(CONFIRM_MESSAGES.DELETE_PROJECT, () => this.confirmDelete(projectId));
  };

  /**
   * Confirms the deletion of a project and initiates the deletion process.
   *
   * @param {number} projectId - The ID of the project to be deleted.
   */
  private confirmDelete = async (projectId: number) => {
    try {
      await this.model.deleteProject(projectId);
      await this.loadAndRenderProjects();
    } catch (error: unknown) {
      this.handleError(error);
    }
  };
}

export default ProjectListController;
