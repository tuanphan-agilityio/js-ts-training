import { Participant, ProjectDetail, Project } from '@/types';
import { API_ENDPOINT } from '@/constants';
import axiosApp from '@/services/axiosApp';

class ProjectDetailModel {
  /**
   * Fetches a list of project members.
   *
   * @returns {Promise<Participant[]>} A promise that resolves to an array of project members.
   */
  private getMembers = async (): Promise<Participant[]> => {
    const data: Participant[] = await axiosApp.get(API_ENDPOINT.MEMBERS);

    return data;
  };

  /**
   * Fetches project data by ID.
   *
   * @param {string} id - The ID of the project to retrieve.
   * @returns {Promise<Project>} A promise that resolves to the project data.
   */
  private getProject = async (id: string): Promise<Project> => {
    const data: Project = await axiosApp.get(
      `${API_ENDPOINT.PROJECTS}/${id}?_expand=projectManager`,
    );

    return data;
  };

  /**
   * Fetches project details including members by project ID.
   *
   * @param {string} id - The ID of the project to retrieve details for.
   * @returns {Promise<ProjectDetail>} A promise that resolves to the project details.
   */
  getProjectDetail = async (id: string): Promise<ProjectDetail> => {
    const [members, project] = await Promise.all([this.getMembers(), this.getProject(id)]);

    const teamMembers = members.filter((member) => project.teamMemberIds?.includes(`${member.id}`));

    delete project.teamMemberIds;

    return { ...project, members: teamMembers };
  };
}

export default ProjectDetailModel;
