import { generateProjectDetailTemplate } from '@/templates';
import { ProjectDetail } from '@/types';
import { querySelector } from '@/utils';

class ProjectDetailView {
  projectElement: HTMLDivElement;

  constructor() {
    this.projectElement = querySelector('.project-detail-container');
  }

  /**
   * Renders project details in the UI by generating and setting the HTML content.
   *
   * @param {ProjectDetail} project - The project details to render.
   */
  renderProjectDetail = (project: ProjectDetail) => {
    this.projectElement.innerHTML = generateProjectDetailTemplate(project);
  };
}

export default ProjectDetailView;
