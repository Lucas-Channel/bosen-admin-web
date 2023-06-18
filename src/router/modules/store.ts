const merchant: AuthRoute.Route = {
	name: 'store',
	path: '/store',
	component: 'basic',
	children: [
		{
			name: 'store_manager',
			path: '/store/manager',
			component: 'self',
			meta: {
				title: '店铺管理',
				i18nTitle: 'message.routes.store.store_manger',
				requiresAuth: true,
				icon: 'fluent:building-shop-20-regular'
			}
		}
	],
	meta: {
		title: '店铺',
		i18nTitle: 'message.routes.store._value',
		icon: 'carbon:store',
		order: 4
	}
};

export default merchant;
