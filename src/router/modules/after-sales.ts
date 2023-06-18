const afterSales: AuthRoute.Route = {
  name: 'after-sales',
  path: '/after-sales',
  component: 'basic',
	children: [
		{
			name: 'after-sales_manager',
			path: '/after-sales/manager',
			component: 'self',
			meta: {
				title: '售后管理',
				i18nTitle: 'message.routes.after_sales.after_sales_manger',
				requiresAuth: true,
				icon: 'fluent:person-feedback-24-regular'
			}
		}
	],
	meta: {
		title: '售后',
		i18nTitle: 'message.routes.after_sales._value',
		icon: 'fluent:person-feedback-24-regular',
		order: 7
	}
};

export default afterSales;
