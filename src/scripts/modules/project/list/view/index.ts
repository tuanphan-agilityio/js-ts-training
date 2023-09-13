import { DEBOUNCE_TIMEOUT } from '@/constants';
import { debounce } from '@/helpers';
import { generateProductTableTemplate } from '@/templates';
import { Project } from '@/types';
import { getElementById, querySelector, querySelectorAll } from '@/utils';

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
   * @param {Project[]} projectList - The list of projects to render.
   */
  renderProjectList(projectList: Project[]): void {
    this.tableElement.innerHTML = generateProductTableTemplate(projectList);
  }

  /**
   * Binds a delete event handler to the delete button.
   *
   * @param {Function} handler - The delete event handler function.
   */
  bindDeleteEvent = (handler: (id: number) => void) => {
    const buttonDeleteElements = querySelectorAll<HTMLButtonElement>('.btn-delete-project');

    buttonDeleteElements.forEach((element: HTMLButtonElement) => {
      element.addEventListener('click', () => {
        const projectId = this.getProjectIdFromElement(element);
        handler(projectId);
      });
    });
  };

  /**
   * Extracts the project ID from the button's data attribute.
   *
   * @param {HTMLButtonElement} buttonElement - The delete button element.
   * @returns {number} - The project ID.
   */
  private getProjectIdFromElement(buttonElement: HTMLButtonElement): number {
    return Number(buttonElement.getAttribute('data-id'));
  }

  /**
   * Binds a filter change event handler to the filter select element.
   *
   * @param {Function} handler - The filter change event handler function.
   */
  bindFilterChange = (handler: (value: string) => void) => {
    const filterSelectElement = getElementById<HTMLSelectElement>('filter-status');

    filterSelectElement.addEventListener('change', () => {
      const filterValue = filterSelectElement.value;
      handler(filterValue);
    });
  };

  /**
   * Binds a search event handler to the search input element.
   *
   * @param {Function} handler - The search event handler function.
   */
  bindSearch = (handler: (keyword: string) => void) => {
    const searchInput = getElementById<HTMLInputElement>('search-input');
    const debouncedHandler = debounce(handler, DEBOUNCE_TIMEOUT);

    searchInput.addEventListener('input', () => {
      debouncedHandler(searchInput.value);
    });
  };
}

export default ProjectListView;
