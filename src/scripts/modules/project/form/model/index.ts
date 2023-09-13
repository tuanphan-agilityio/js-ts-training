import axiosApp from '@/services/axiosApp';
import { API_ENDPOINT } from '@/constants';
import { Participant, ProjectForm } from '@/types';

class ProjectFormModel {
  /**
   * Fetches project managers from the API.
   *
   * @returns {Promise<Participant[]>} A promise resolving to an array of project managers.
   */
  private getProjectManagers = async (): Promise<Participant[]> => {
    const data: Participant[] = await axiosApp.get(API_ENDPOINT.PROJECT_MANAGERS);

    return data;
  };

  /**
   * Fetches project members from the API.
   *
   * @returns {Promise<Participant[]>} A promise resolving to an array of project members.
   */
  private getMembers = async (): Promise<Participant[]> => {
    const data: Participant[] = await axiosApp.get(API_ENDPOINT.MEMBERS);

    return data;
  };

  /**
   * Fetches both project managers and members concurrently from the API.
   *
   * @returns {Promise<[Participant[], Participant[]]>} A promise resolving to an array
   * containing project managers and project members.
   */
  getResources = async (): Promise<[Participant[], Participant[]]> => {
    const projectManagersPromise = this.getProjectManagers();
    const membersPromise = this.getMembers();

    const [projectManagers, members] = await Promise.all([projectManagersPromise, membersPromise]);

    return [projectManagers, members];
  };

  /**
   * Creates a new project by sending a POST request to the API.
   *
   * @param {ProjectForm} project - The project details to be created.
   * @returns {Promise<ProjectForm>} A promise resolving to the created project details.
   */
  createProject = async (project: ProjectForm): Promise<ProjectForm> => {
    const data: ProjectForm = await axiosApp.post(API_ENDPOINT.PROJECTS, project);

    return data;
  };
}

export default ProjectFormModel;
