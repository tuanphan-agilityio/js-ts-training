const ROUTES = {
  DASHBOARD: '/',
  PROJECTS: '/projects.html',
  PROJECTS_FORM: '/projects-form.html',
  PROJECTS_DETAIL: '/projects-detail.html',
  SIGN_IN: '/sign-in.html',
  NOT_FOUND: '/not-found.html',
};

const NAV_ITEMS = [
  { href: ROUTES.DASHBOARD, iconName: 'home', title: 'Home', activePaths: [ROUTES.DASHBOARD] },
  {
    href: '#',
    iconName: 'course',
    title: 'Course',
    activePaths: [],
  },
  {
    href: ROUTES.PROJECTS,
    iconName: 'project',
    title: 'Projects',
    activePaths: [ROUTES.PROJECTS, ROUTES.PROJECTS_DETAIL, ROUTES.PROJECTS_FORM],
  },
  {
    href: '#',
    iconName: 'payment',
    title: 'Payment',
    activePaths: [],
  },
  {
    href: '#',
    iconName: 'report',
    title: 'Report',
    activePaths: [],
  },
  {
    href: '#',
    iconName: 'setting',
    title: 'Setting',
    activePaths: [],
  },
];

export { ROUTES, NAV_ITEMS };
