import { request } from '../request';

/**
 * 查询所有上架的店铺
 * @param name - 店铺名称
 * @param status - 店铺申请状态
 * @param shopId - 商城id
 * @param current - 当前页
 * @param size - 页面大小
 * @returns - 返回data
 */
export function storeShopPageList(name: string, status: number, shopId: string, current: number, size: number) {
  return request.get<StoreShop.StoreShopInfoData>(
    `/bosen-admin/store/shop/admin/pageList?current=${current}&size=${size}&name=${name}&shopId=${shopId}`
  );
}
