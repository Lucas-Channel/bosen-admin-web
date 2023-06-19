const shop: AuthRoute.Route = {
	name: 'shop',
	path: '/shop',
	component: 'basic',
	children: [
		{
			name: 'shop_manager',
			path: '/shop/manager',
			component: 'self',
			meta: {
				title: '商城管理',
				i18nTitle: 'message.routes.shop.shop_manger',
				requiresAuth: true,
				icon: 'ic:sharp-shopify'
			}
		}
	],
	meta: {
		title: '商城',
		i18nTitle: 'message.routes.shop._value',
		icon: 'ic:sharp-shopify',
		order: 8
	}
};

export default shop;
