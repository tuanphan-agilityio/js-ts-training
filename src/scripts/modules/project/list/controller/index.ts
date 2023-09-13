import { Toast, renderSidebar, showConfirmPopup } from '@/utils';
import { convertObjectToURLQueryString } from '@/helpers';
import { Project, QueryParams } from '@/types';
import { CONFIRM_MESSAGES } from '@/constants';
import ProjectListModel from '../model';
import ProjectListView from '../view';

class ProjectListController {
  private model: ProjectListModel;
  private view: ProjectListView;
  private toast = new Toast();
  private params: QueryParams;

  constructor(model: ProjectListModel, view: ProjectListView) {
    this.model = model;
    this.view = view;
    this.params = {};
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
      this.bindViewEvents();
    } catch (error: unknown) {
      this.handleError(error);
    }
  };

  /**
   * Load and render projects.
   */
  private loadAndRenderProjects = async () => {
    const queryString = convertObjectToURLQueryString(this.params);
    const projectList = await this.model.getProjects(queryString);
    this.renderProjectList(projectList);
  };

  /**
   * Renders the project list in the view and binds delete events if applicable.
   *
   * @param {Project[]} projectList - The list of projects to render.
   */
  private renderProjectList = (projectList: Project[]) => {
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

  /**
   * Binds view events to their respective handler methods.
   */
  private bindViewEvents = () => {
    this.view.bindFilterChange(this.handleFilterChange);
    this.view.bindSearch(this.handleSearchChange);
  };

  /**
   * Handles the change of the filter value.
   *
   * @param {string} filterValue - The new filter value.
   */
  private handleFilterChange = async (filterValue: string) => {
    try {
      const queryString = this.generateQueryStringWithNewStatus(filterValue);
      const projectList = await this.model.getProjects(queryString);
      this.renderProjectList(projectList);
    } catch (error: unknown) {
      this.handleError(error);
    }
  };

  /**
   * Creates a query string with the given status.
   *
   * @param {string} status - The status to include in the query string.
   * @returns {string} - The generated query string.
   */
  private generateQueryStringWithNewStatus = (status: string): string => {
    if (!status) {
      delete this.params.status;
    } else {
      this.params.status = status;
    }

    return convertObjectToURLQueryString(this.params);
  };

  /**
   * Handles the change of the search keyword.
   *
   * @param {string} keyword - The new search keyword.
   */
  private handleSearchChange = async (keyword: string) => {
    try {
      const queryString = this.generateQueryStringWithNewKeyword(keyword);
      const searchResults = await this.model.getProjects(queryString);
      this.renderProjectList(searchResults);
    } catch (error: unknown) {
      this.handleError(error);
    }
  };

  /**
   * Creates a query string with the given keyword.
   *
   * @param {string} keyword - The keyword to include in the query string.
   * @returns {string} - The generated query string.
   */
  private generateQueryStringWithNewKeyword = (keyword: string): string => {
    this.params.q = keyword;

    return convertObjectToURLQueryString(this.params);
  };
}

export default ProjectListController;
