const dashboard: AuthRoute.Route = {
  name: 'dashboard',
  path: '/dashboard',
  component: 'basic',
  meta: { title: 'dashboard', icon: 'mdi:menu' },
  children: [
    {
      name: 'dashboard_analysis',
      path: '/dashboard/analysis',
      component: 'self',
      meta: { title: 'dashboard_analysis', icon: 'mdi:menu' }
    }
  ]
};

export default dashboard;
