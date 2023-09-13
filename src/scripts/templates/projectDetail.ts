import { formatDate } from '@/helpers';
import { ProjectDetail } from '@/types';

/**
 * Generates an HTML template for displaying project details.
 *
 * @param {ProjectDetail} project - The project details.
 * @returns {string} - The HTML template for the project details.
 */
const generateProjectDetailTemplate = (project: ProjectDetail): string => {
  const { name, client, status, startDate, endDate, logo, description, members, projectManager } =
    project;

  const memberTemplates = members
    .map(
      (member) => `
      <div class="member-wrapper">
        <div class="member-avatar-wrapper">
          <img
            class="member-avatar-img"
            src="./images/avatar-default.webp"
            alt="${member.name}"
          />
        </div>
        <div class="member-info">
          <p class="member-name">${member.name}</p>
          <p class="member-role">Developer</p>
        </div>
      </div>
    `,
    )
    .join('');

  return `
    <section class="project-summary">
      <div class="project-avatar-wrapper">
        <img class="project-avatar-img" src="${
          logo || './images/project-default.webp'
        }" alt="${name}" />
      </div>
      <hgroup class="project-detail">
        <h2 class="project-name">${name}</h2>
        <p class="project-description">${description}</p>
      </hgroup>
    </section>

    <div class="project-info-wrapper">
      <div class="project-overview">
        <p class="project-info-heading">Overview</p>

        <ul class="project-info-list">
          <li class="project-info-item">
            <p class="project-info-field">Status</p>
            <p class="tag tag-${status}">${status}</p>
          </li>

          <li class="project-info-item">
            <p class="project-info-field">Start Date</p>
            <p>${startDate ? formatDate(startDate) : ''}</p>
          </li>

          <li class="project-info-item">
            <p class="project-info-field">End Date</p>
            <p>${endDate ? formatDate(endDate) : ''}</p>
          </li>

          <li class="project-info-item">
            <p class="project-info-field">Client</p>
            <p>${client}</p>
          </li>
        </ul>
      </div>

      <!-- Members -->
      <div class="project-member">
        <p class="project-info-heading">Members</p>

        <div class="member-wrapper">
          <div class="member-avatar-wrapper">
            <img
              class="member-avatar-img"
              src="./images/avatar-default.webp"
              alt="${projectManager.name}"
            />
          </div>
          <div class="member-info">
            <p class="member-name">${projectManager.name}</p>
            <p class="member-role">Project Manager</p>
          </div>
        </div>

        ${memberTemplates}
      </div>
    </div>
  `;
};

export { generateProjectDetailTemplate };
