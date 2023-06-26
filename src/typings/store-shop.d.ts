/** 商城店铺相关模块 */
declare namespace StoreShop {
  /** 店铺信息 */
  interface StoreShopInfo {
    id: string;
    /** 店铺id */
    storeId: string;
    /** 店铺名 */
    storeName: string;
    /** 店铺logo */
    logoUrl: string;
    /** 申请状态 */
    applyStatus: number;
    /** 商城id */
    shopId: string;
    /** 商城名称 */
    shopName: string;
  }

  type StoreShopApplyStatus = NonNullable<StoreInfo['applyStatus']>;
}
