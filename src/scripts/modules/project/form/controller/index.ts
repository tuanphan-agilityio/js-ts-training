import { Toast, renderSidebar } from '@/utils';
import { ProjectFormInputs } from '@/types';
import { navigatePage } from '@/helpers';
import { ROUTES } from '@/constants';
import ProjectFormView from '../view';
import ProjectFormModel from '../model';

class ProjectFormController {
  private view: ProjectFormView;
  private model: ProjectFormModel;
  private toast = new Toast();

  constructor(model: ProjectFormModel, view: ProjectFormView) {
    this.model = model;
    this.view = view;
    this.setupInitialView();
  }

  /**
   * Initializes the view by setting up event listeners and default values.
   */
  private setupInitialView = async () => {
    renderSidebar(window.location.pathname);
    await this.fetchAndBindSelectBoxData();
    this.view.bindSubmitFormEvent(this.handleSubmitForm);
    this.view.bindCancelEvent(this.handleCancelButtonClick);
  };

  /**
   * Fetches and binds data for select boxes (e.g., managers and members) to the view.
   */
  private fetchAndBindSelectBoxData = async () => {
    const [managers, members] = await this.model.getResources();

    this.view.bindRenderOptions(managers, members);
  };

  /**
   * Handles the cancel button click event by navigating to the projects page.
   */
  private handleCancelButtonClick = () => {
    navigatePage(ROUTES.PROJECTS);
  };

  /**
   * Handles the submission of a project form.
   *
   * @param formData - The data submitted in the form.
   */
  private handleSubmitForm = async (formData: ProjectFormInputs) => {
    try {
      await this.model.createProject(formData);
      navigatePage(ROUTES.PROJECTS);
    } catch (error: unknown) {
      this.toast.error(error as string);
    }
  };
}

export default ProjectFormController;
