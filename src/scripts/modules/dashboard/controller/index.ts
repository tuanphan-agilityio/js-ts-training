import { renderSidebar } from '@/utils';

class DashboardController {
  constructor() {
    renderSidebar(window.location.pathname);
  }
}

export default DashboardController;
