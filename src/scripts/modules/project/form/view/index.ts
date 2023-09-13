import { convertFileToBase64 } from '@/helpers';
import { Participant, ProjectFormInputs, PROJECT_STATUS } from '@/types';
import { getElementById } from '@/utils';

class ProjectFormView {
  private projectManagerSelect: HTMLSelectElement;
  private teamMemberSelect: HTMLSelectElement;
  private logoInput: HTMLInputElement;
  private projectForm: HTMLFormElement;
  private cancelButtonElement: HTMLButtonElement;
  private imgPreviewElement: HTMLInputElement;

  constructor() {
    this.projectManagerSelect = getElementById('project-manager-id');
    this.teamMemberSelect = getElementById('team-member-ids');
    this.logoInput = getElementById('logo');
    this.imgPreviewElement = getElementById('project-logo-preview');
    this.projectForm = getElementById('project-form');
    this.cancelButtonElement = getElementById('btn-project-cancel');
    this.handleImagePreview();
  }

  /**
   * Bind select options with project managers and team members.
   *
   * @param {Participant[]} managers - List of project managers.
   * @param {Participant[]} members - List of team members.
   */
  bindRenderOptions = (managers: Participant[], members: Participant[]): void => {
    this.populateProjectManagers(managers);
    this.populateTeamMembers(members);
  };

  /**
   * Populate a <select> element with options based on a list of participants.
   *
   * @param {HTMLSelectElement} selectElement - The <select> element to populate.
   * @param {Participant[]} participants - The list of participants to create options from.
   */
  private populateSelectElement = (
    selectElement: HTMLSelectElement,
    participants: Participant[],
  ) => {
    participants.forEach((participant) => {
      const option = document.createElement('option');

      option.textContent = participant.name;
      option.value = participant.id.toString();

      selectElement.appendChild(option);
    });
  };

  /**
   * Populate the project manager <select> element with options based on a list of managers.
   *
   * @param {Participant[]} managers - The list of project managers to create options from.
   */
  private populateProjectManagers = (managers: Participant[]) => {
    this.populateSelectElement(this.projectManagerSelect, managers);
  };

  /**
   * Populate the team member <select> element with options based on a list of members.
   *
   * @param {Participant[]} members - The list of team members to create options from.
   */
  private populateTeamMembers = (members: Participant[]) => {
    this.populateSelectElement(this.teamMemberSelect, members);
  };

  /**
   * Attach an event listener to the logo input element to preview selected images.
   * When an image is selected, it converts the image to Base64 format and displays it in an image preview element.
   */
  private handleImagePreview = () => {
    this.logoInput.addEventListener('change', async () => {
      const file = this.logoInput.files?.[0];

      if (file) {
        const fileSrc = await convertFileToBase64(file);

        this.imgPreviewElement.classList.add('open');
        this.imgPreviewElement.src = fileSrc;
      }
    });
  };

  /**
   * Bind the cancel button click event.
   *
   * @param {() => void} handler - The event handler function.
   */
  bindCancelEvent = (handler: () => void) => {
    this.cancelButtonElement.addEventListener('click', () => {
      handler();
    });
  };

  /**
   * Bind the form submit event.
   *
   * @param {(data: ProjectForm) => void} handler - The event handler function.
   */
  bindSubmitFormEvent = (handler: (data: ProjectFormInputs) => void) => {
    this.projectForm.addEventListener('submit', async (event: SubmitEvent) => {
      event.preventDefault();

      const formData = new FormData(this.projectForm);
      const data = await this.extractFormData(formData);

      handler(data);
    });
  };

  /**
   * Extract form data from a FormData object and convert it into a structured ProjectForm object.
   *
   * @param {FormData} formData - The FormData object containing the form input values.
   * @returns {ProjectFormInputs} The structured form data.
   */
  private extractFormData = async (formData: FormData): Promise<ProjectFormInputs> => {
    const extractValue = (key: string) => (formData.get(key) as string).trim();

    const getOptionalFileBase64 = async (key: string, defaultValue: string = '') => {
      const file = formData.get(key) as File;

      return file.size > 0 ? await convertFileToBase64(file) : defaultValue;
    };

    // TODO: Handle in update project case
    const imgBase64 = await getOptionalFileBase64('logo', '');

    return {
      name: extractValue('name'),
      client: extractValue('client'),
      projectManagerId: formData.get('project-manager-id') as string,
      teamMemberIds: formData.getAll('team-member-ids') as string[],
      status: formData.get('status') as PROJECT_STATUS,
      startDate: formData.get('start-date') as string,
      endDate: formData.get('end-date') as string,
      logo: imgBase64,
      description: extractValue('description'),
    };
  };
}

export default ProjectFormView;
