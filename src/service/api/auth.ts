import { request } from '../request';

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
  return request.post<boolean>('/getSmsCode', { phone });
}

/**
 * 登录
 * @param username - 用户名
 * @param password - 密码
 * @param grant_type 授权方式
 * @param client_id 客户端id
 * @param client_secret 客户端密钥
 */
// eslint-disable-next-line max-params
export function fetchLogin(
  username: string,
  password: string,
  grant_type: string,
  client_id: string,
  client_secret: string
) {
  return request.post<ApiAuth.Token>('/bosen-auth/oauth/login', {
    username,
    password,
    grant_type,
    client_id,
    client_secret
  });
}

/** 获取用户信息 */
export function fetchUserInfo() {
  return request.get<ApiAuth.UserInfo>('/bosen-admin//getUserInfo');
}

/**
 * 获取用户路由数据
 * @param userId - 用户id
 * @description 后端根据用户id查询到对应的角色类型，并将路由筛选出对应角色的路由数据返回前端
 */
export function fetchUserRoutes(userId: string) {
  return request.get<ApiRoute.Route>('/bosen-admin/role/menu/listMenuAfterLogin?roleId=' + userId);
}

/**
 * 刷新token
 * @param refreshToken
 * @param grant_type
 * @param client_id
 * @param client_secret
 */
// eslint-disable-next-line max-params
export function fetchUpdateToken(refreshToken: string, grant_type: string, client_id: string, client_secret: string) {
  return request.post<ApiAuth.Token>('/bosen-auth/oauth/login', { refreshToken, grant_type, client_id, client_secret });
}
