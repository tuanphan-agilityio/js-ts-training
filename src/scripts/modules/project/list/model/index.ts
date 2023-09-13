import { API_ENDPOINT } from '@/constants';
import axiosApp from '@/services/axiosApp';
import { Project } from '@/types';

class ProjectListModel {
  /**
   * Fetches the list of projects with expanded project manager information.
   *
   * @param {string} params - Optional query parameters.
   * @returns {Promise<Project[]>} A promise resolving to the list of projects.
   */
  getProjects = async (params: string = ''): Promise<Project[]> => {
    const response: Project[] = await axiosApp.get(
      `${API_ENDPOINT.PROJECTS}?_expand=projectManager&${params}`,
    );

    return response;
  };

  /**
   * Deletes a project by its ID.
   *
   * @param {number} id - The ID of the project to delete.
   * @returns {Promise<void>} A promise that resolves when the project is deleted.
   */
  deleteProject = async (id: number): Promise<void> => {
    await axiosApp.delete(`${API_ENDPOINT.PROJECTS}/${id}`);
  };
}

export default ProjectListModel;
