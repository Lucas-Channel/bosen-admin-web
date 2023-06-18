const merchant: AuthRoute.Route = {
	name: 'merchant',
	path: '/merchant',
	component: 'basic',
	children: [
		{
			name: 'merchant_manager',
			path: '/merchant/manager',
			component: 'self',
			meta: {
				title: '商家管理',
				i18nTitle: 'message.routes.merchant.merchant_manger',
				requiresAuth: true,
				icon: 'fluent:people-search-24-regular'
			}
		}
	],
	meta: {
		title: '商家',
		i18nTitle: 'message.routes.merchant._value',
		icon: 'fluent:people-team-24-regular',
		order: 3
	}
};

export default merchant;
