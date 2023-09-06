import { getProductTableTemplate } from '@/templates';
import { ProjectItem } from '@/types';
import { querySelector } from '@/utils';

/**
 * View class responsible for rendering and handling project list-related UI.
 */
class ProjectListView {
  private tableElement: HTMLTableElement;

  /**
   * Creates an instance of ProjectListView.
   * Initializes the table element by querying the DOM.
   */
  constructor() {
    this.tableElement = querySelector<HTMLTableElement>('.project-table-list');
  }

  /**
   * Renders the list of projects in the table.
   *
   * @param {ProjectItem[]} projectList - The list of projects to render.
   */
  renderProjectList(projectList: ProjectItem[]): void {
    this.tableElement.innerHTML = getProductTableTemplate(projectList);
  }
}

export default ProjectListView;
