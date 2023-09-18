import { Toast, renderSidebar, showFormErrors } from '@/utils';
import { FormError, ProjectFormInputs } from '@/types';
import { camelCaseToHyphenCase, extractParamFromUrlByKey, isEmpty, navigatePage } from '@/helpers';
import { ROUTES } from '@/constants';
import ProjectFormView from '../view';
import ProjectFormModel from '../model';
import validateProjectForm from './validation';

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
    this.showDefaultValuesForm();
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
   * Handles the form submission for creating or updating a project.
   *
   * @param {ProjectFormInputs} formData - The form data for the project.
   * @param {string | null} projectId - The ID of the project being updated (null for new projects).
   */
  private handleSubmitForm = async (formData: ProjectFormInputs, projectId: string | null) => {
    // Validate the form data and check for errors.
    const formErrors = validateProjectForm(formData);

    if (isEmpty(formErrors)) {
      try {
        if (!projectId) {
          await this.model.createProject(formData);
        } else {
          await this.model.updateProject(projectId, formData);
        }

        navigatePage(ROUTES.PROJECTS);
      } catch (error: unknown) {
        this.toast.error(error as string);
      }
    } else {
      // Transform and display form errors in the UI.
      const errors = this.transformFormErrors(formErrors);
      showFormErrors(errors);
    }
  };

  /**
   * Transforms form errors to match the UI convention (camelCase to hyphen-case).
   *
   * @param {Record<string, string>} formErrors - The form errors to be transformed.
   * @returns {FormError} Transformed form errors.
   */
  private transformFormErrors = (formErrors: Record<string, string>): FormError => {
    const errors: FormError = {};

    Object.entries(formErrors).forEach(([key, value]) => {
      const newKey = camelCaseToHyphenCase(key);
      errors[newKey] = value;
    });

    return errors;
  };

  /**
   * Shows default values in the form when editing an existing project.
   */
  private showDefaultValuesForm = async () => {
    const projectId = extractParamFromUrlByKey('id');
    if (projectId) {
      try {
        const project = await this.model.getProject(projectId);
        this.view.renderEditProjectForm(project);
      } catch (error) {
        navigatePage(ROUTES.NOT_FOUND, true);
      }
    }
  };
}

export default ProjectFormController;
