import { transformObjectToOption } from './_shared';

export const loginModuleLabels: Record<UnionKey.LoginModule, string> = {
  'pwd-login': '账密登录',
  'code-login': '手机验证码登录',
  register: '注册',
  'reset-pwd': '重置密码',
  'bind-wechat': '微信绑定'
};

export const userRoleLabels: Record<Auth.RoleType, string> = {
  super: '超级管理员',
  admin: '管理员',
  user: '普通用户'
};
export const userRoleOptions = transformObjectToOption(userRoleLabels);

/** 用户性别 */
export const genderLabels: Record<UserManagement.GenderKey, string> = {
  0: '女',
  1: '男'
};
export const genderOptions = transformObjectToOption(genderLabels);

/** 用户状态 */
export const userStatusLabels: Record<UserManagement.UserStatusKey, string> = {
  1: '启用',
  2: '禁用',
  3: '冻结',
  4: '软删除'
};
export const userStatusOptions = transformObjectToOption(userStatusLabels);

/** 用户状态 */
export const storeShopApplyStatusEnum: Record<StoreShop.StoreShopApplyStatus, string> = {
  1: '待审核开店申请',
  2: '开店申请审核通过',
  3: '开店申请审核不通过',
  4: '待审核关店申请',
  5: '关店申请审核通过',
  6: '关店申请审核不通过'
};
export const storeShopApplyStatusEnumOptions = transformObjectToOption(storeShopApplyStatusEnum);