import { NAV_ITEMS } from '@/constants';
import { User } from '@/types';

/**
 * Generates the sidebar HTML template based on user info and current path.
 *
 * @param {User | null} userInfo - The user information.
 * @param {string} currentPath - The current path of the application.
 * @returns {string} - The generated HTML template for the sidebar.
 */
const generateSidebarTemplate = (userInfo: User | null, currentPath: string): string => {
  const { role, fullName, avatar } = userInfo || {};

  const navItemsHTML = NAV_ITEMS.map(
    ({ href, iconName, title, activePaths }) =>
      `
      <li>
        <a href="${href}" class="sidebar-nav-item ${
          activePaths.includes(currentPath) ? 'nav-item-active' : ''
        }">
          <span class="nav-icon-wrapper">
            <svg class="${iconName}-icon">
              <use xlink:href="./icons/${iconName}.svg#small"></use>
            </svg>
          </span>
          ${title}
        </a>
      </li>
    `,
  ).join('');

  return `
    <h1 class="sidebar-logo">Project Management</h1>
    <div class="sidebar-info">
      <div class="sidebar-avatar-wrapper">
        <img
          class="sidebar-avatar"
          src="${avatar || './images/avatar-default.webp'}"
          alt="${fullName}"
        />
      </div>
      <p class="profile-name">${fullName}</p>
      <p class="profile-role">${role}</p>
    </div>

    <div class="sidebar-control">
      <nav>
        <ul class="sidebar-nav-list">
          ${navItemsHTML}
        </ul>
      </nav>

      <button class="sidebar-logout">Logout <i class="logout-icon"></i></button>
    </div>`;
};

export { generateSidebarTemplate };
