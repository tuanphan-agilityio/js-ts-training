import { capitalizeFirstLetter, formatDate } from '@/helpers';
import { Project } from '@/types';

/**
 * Generates the HTML template for displaying a table of project items.
 *
 * @param {Project[]} projectList - The list of project items to display.
 * @returns {string} The HTML template.
 */
const generateProductTableTemplate = (projectList: Project[]): string =>
  `
        <thead class="table-head">
          <tr>
            <th class="table-header">Logo</th>
            <th class="table-header">Project Name</th>
            <th class="table-header">Client</th>
            <th class="table-header">Project Manager</th>
            <th class="table-header">Status</th>
            <th class="table-header">Start Date</th>
            <th class="table-header">End Date</th>
            <th class="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${projectList
            ?.map((projectItem) => {
              const {
                id,
                name,
                logo,
                projectManager: { name: projectManagerName },
                client,
                startDate,
                endDate,
                status,
              } = projectItem;

              return `
              <tr class="table-row" data-id=${id}>
                <td class="table-data">
                  <img
                    class="project-logo-img"
                    src="${logo || './images/avatar-default.webp'}"
                    alt="Project logo"
                  />
                </td>
                <td class="table-data">${name}</td>
                <td class="table-data">${client}</td>
                <td class="table-data">
                  <img
                    class="project-manager-img"
                    src="./images/manager-avatar-default.webp"
                    alt="Project Manager Logo"
                  />
                  ${projectManagerName}
                </td>
                <td class="table-data">
                  <p class="tag tag-${status}">${capitalizeFirstLetter(status)}</p>
                </td>
                <td class="table-data">${startDate ? formatDate(startDate) : ''}</td>
                <td class="table-data">${endDate ? formatDate(endDate) : ''}</td>
                <td class="table-data">
                  <button class="btn-action" >
                    <span class="edit-icon"></span>
                  </button>
                  <button class="btn-action btn-delete-project" data-id=${id}>
                    <span class="delete-icon"></span>
                  </button>
                </td>
              </tr>
              `;
            })
            .join('')}
        </tbody>`;

export { generateProductTableTemplate };
