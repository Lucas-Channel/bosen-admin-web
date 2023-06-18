const order: AuthRoute.Route = {
	name: 'order',
	path: '/order',
	component: 'basic',
	children: [
		{
			name: 'order_manager',
			path: '/order/manager',
			component: 'self',
			meta: {
				title: '订单管理',
				i18nTitle: 'message.routes.order.order_manger',
				requiresAuth: true,
				icon: 'fluent:slide-search-24-regular'
			}
		}
	],
	meta: {
		title: '订单',
		i18nTitle: 'message.routes.order._value',
		icon: 'fluent:slide-text-24-regular',
		order: 6
	}
};

export default order;
