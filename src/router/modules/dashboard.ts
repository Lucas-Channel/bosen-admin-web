const dashboard: AuthRoute.Route = {
	name: 'dashboard_workbench',
	path: '/dashboard/workbench',
	component: 'self',
	meta: {
		title: '工作台',
		i18nTitle: 'message.routes.dashboard.workbench',
		requiresAuth: true,
		keepAlive: true,
		singleLayout: 'basic',
		permissions: ['super', 'admin', 'user'],
		icon: 'icon-park-outline:workbench',
		order: 1
	},
	children: []
};

export default dashboard;
