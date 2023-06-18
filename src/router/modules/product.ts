const product: AuthRoute.Route = {
	name: 'product',
	path: '/product',
	component: 'basic',
	children: [
		{
			name: 'product_manager',
			path: '/product/manager',
			component: 'self',
			meta: {
				title: '商品管理',
				i18nTitle: 'message.routes.product.product_manger',
				requiresAuth: true,
				icon: 'fluent:box-search-24-regular'
			}
		}
	],
	meta: {
		title: '商品',
		i18nTitle: 'message.routes.product._value',
		icon: 'fluent:box-24-regular',
		order: 5
	}
};

export default product;
