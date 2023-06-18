declare namespace PageRoute {
  /**
   * the root route key
   * @translate 根路由
   */
  type RootRouteKey = 'root';

  /**
   * the not found route, which catch the invalid route path
   * @translate 未找到路由(捕获无效路径的路由)
   */
  type NotFoundRouteKey = 'not-found';

  /**
   * the route key
   * @translate 页面路由
   */
  type RouteKey =
    | ''
    | '_403'
    | '_404'
    | '_500'
    | '_constant-page'
    | '_login'
    | '_not-found'
    | 'about'
    | 'after-sales'
    | 'after-sales_manager'
    | 'auth-demo'
    | 'auth-demo_permission'
    | 'auth-demo_super'
    | 'component'
    | 'component_button'
    | 'component_card'
    | 'component_table'
    | 'dashboard'
    | 'dashboard_analysis'
    | 'dashboard_workbench'
    | 'data-center'
    | 'data-center_merchant'
    | 'data-center_trade'
    | 'document'
    | 'document_naive'
    | 'document_project'
    | 'document_project-link'
    | 'document_vite'
    | 'document_vue'
    | 'exception'
    | 'exception_403'
    | 'exception_404'
    | 'exception_500'
    | 'function'
    | 'function_tab'
    | 'function_tab-detail'
    | 'function_tab-multi-detail'
    | 'management'
    | 'management_auth'
    | 'management_role'
    | 'management_route'
    | 'management_user'
    | 'merchant'
    | 'merchant_manager'
    | 'multi-menu'
    | 'multi-menu_first'
    | 'multi-menu_first_second'
    | 'multi-menu_first_second-new'
    | 'multi-menu_first_second-new_third'
    | 'order'
    | 'order_manager'
    | 'plugin'
    | 'plugin_charts'
    | 'plugin_charts_antv'
    | 'plugin_charts_echarts'
    | 'plugin_copy'
    | 'plugin_editor'
    | 'plugin_editor_markdown'
    | 'plugin_editor_quill'
    | 'plugin_icon'
    | 'plugin_map'
    | 'plugin_print'
    | 'plugin_swiper'
    | 'plugin_video'
    | 'product'
    | 'product_manager'
    | 'store'
    | 'store_manager';

  /**
   * last degree route key, which has the page file
   * @translate 最后一级路由(该级路有对应的页面文件)
   */
  type LastDegreeRouteKey = Extract<
    RouteKey,
    | '_403'
    | '_404'
    | '_500'
    | '_constant-page'
    | '_login'
    | '_not-found'
    | 'about'
    | 'after-sales_manager'
    | 'auth-demo_permission'
    | 'auth-demo_super'
    | 'component_button'
    | 'component_card'
    | 'component_table'
    | 'dashboard_analysis'
    | 'dashboard_workbench'
    | 'data-center_merchant'
    | 'data-center_trade'
    | 'document_naive'
    | 'document_project'
    | 'document_project-link'
    | 'document_vite'
    | 'document_vue'
    | 'exception_403'
    | 'exception_404'
    | 'exception_500'
    | 'function_tab'
    | 'function_tab-detail'
    | 'function_tab-multi-detail'
    | 'management_auth'
    | 'management_role'
    | 'management_route'
    | 'management_user'
    | 'merchant_manager'
    | 'multi-menu_first_second'
    | 'multi-menu_first_second-new_third'
    | 'order_manager'
    | 'plugin_charts_antv'
    | 'plugin_charts_echarts'
    | 'plugin_copy'
    | 'plugin_editor_markdown'
    | 'plugin_editor_quill'
    | 'plugin_icon'
    | 'plugin_map'
    | 'plugin_print'
    | 'plugin_swiper'
    | 'plugin_video'
    | 'product_manager'
    | 'store_manager'
  >;
}
