import { renderSidebar } from '@/utils';
import { ROUTES } from '@/constants';
import { extractParamFromUrlByKey, navigatePage } from '@/helpers';
import ProjectDetailModel from '../model';
import ProjectDetailView from '../view';

class ProjectDetailController {
  private view: ProjectDetailView;
  private model: ProjectDetailModel;
  private projectId: string | null;

  /**
   * Creates an instance of ProjectDetailController.
   *
   * @param {ProjectDetailModel} model - The model responsible for fetching project details.
   * @param {ProjectDetailView} view - The view responsible for rendering project details.
   */
  constructor(model: ProjectDetailModel, view: ProjectDetailView) {
    this.view = view;
    this.model = model;
    this.projectId = extractParamFromUrlByKey('id');
    this.showProjectDetail();
    renderSidebar(window.location.pathname);
  }

  /**
   * Fetches and displays project details.
   * If the project ID is available, it fetches the project details from the model and renders them in the view.
   * If there's an error fetching the data, it navigates to the dashboard page.
   *
   * @throws {Error} If there's an error fetching the data, it navigates to the dashboard page.
   */
  private showProjectDetail = async () => {
    if (!this.projectId) {
      return navigatePage(ROUTES.NOT_FOUND, true);
    }

    try {
      const data = await this.model.getProjectDetail(this.projectId);

      this.view.renderProjectDetail(data);
    } catch (error) {
      navigatePage(ROUTES.NOT_FOUND, true);
    }
  };
}

export default ProjectDetailController;
