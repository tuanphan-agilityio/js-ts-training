const ROUTES = {
  DASHBOARD: '/',
  PROJECTS: '/project',
  SIGN_IN: '/sign-in',
};

const NAV_ITEMS = [
  { href: ROUTES.DASHBOARD, iconName: 'home', title: 'Home' },
  { href: ROUTES.PROJECTS, iconName: 'project', title: 'Projects' },
];

export { ROUTES, NAV_ITEMS };
