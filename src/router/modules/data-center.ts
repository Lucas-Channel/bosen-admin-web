const dataCenter: AuthRoute.Route = {
	name: 'data-center',
	path: '/data-center',
	component: 'basic',
	children: [
		{
			name: 'data-center_merchant',
			path: '/data-center/merchant',
			component: 'self',
			meta: {
				title: '商家中心',
				i18nTitle: 'message.routes.dataCenter.merchant_center',
				requiresAuth: true,
				icon: 'carbon:store'
			}
		},
		{
			name: 'data-center_trade',
			path: '/data-center/trade',
			component: 'self',
			meta: {
				title: '交易中心',
				i18nTitle: 'message.routes.dataCenter.trade_center',
				requiresAuth: true,
				icon: 'carbon:cloud-monitoring'
			}
		}
	],
	meta: {
		title: '数据看板',
		i18nTitle: 'message.routes.dataCenter._value',
		icon: 'fluent:data-histogram-24-regular',
		order: 2
	}
};

export default dataCenter;
