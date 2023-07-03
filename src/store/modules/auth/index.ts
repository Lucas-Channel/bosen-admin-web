import { unref, nextTick } from 'vue';
import { defineStore } from 'pinia';
import { router } from '@/router';
import { fetchLogin } from '@/service';
import { useRouterPush } from '@/composables';
import { localStg } from '@/utils';
import { useTabStore } from '../tab';
import { useRouteStore } from '../route';
import { getToken, getUserInfo, clearAuthStorage } from './helpers';

interface AuthState {
  /** 用户信息 */
  userInfo: Auth.UserInfo;
  /** 用户token */
  token: string;
  /** 登录的加载状态 */
  loginLoading: boolean;
}

export const useAuthStore = defineStore('auth-store', {
  state: (): AuthState => ({
    userInfo: getUserInfo(),
    token: getToken(),
    loginLoading: false
  }),
  getters: {
    /** 是否登录 */
    isLogin(state) {
      return Boolean(state.token);
    }
  },
  actions: {
    /** 重置auth状态 */
    resetAuthStore() {
      const { toLogin } = useRouterPush(false);
      const { resetTabStore } = useTabStore();
      const { resetRouteStore } = useRouteStore();
      const route = unref(router.currentRoute);

      clearAuthStorage();
      this.$reset();

      if (route.meta.requiresAuth) {
        toLogin();
      }

      nextTick(() => {
        resetTabStore();
        resetRouteStore();
      });
    },
    /**
     * 处理登录后成功或失败的逻辑
     * @param backendToken - 返回的token
     */
    async handleActionAfterLogin(backendToken: ApiAuth.Token) {
      const route = useRouteStore();
      const { toLoginRedirect } = useRouterPush(false);

      const loginSuccess = await this.loginByToken(backendToken);

      if (loginSuccess) {
        await route.initAuthRoute();

        // 跳转登录后的地址
        toLoginRedirect();

        // 登录成功弹出欢迎提示
        if (route.isInitAuthRoute) {
          window.$notification?.success({
            title: '登录成功!',
            content: `欢迎回来，${this.userInfo.username}!`,
            duration: 3000
          });
        }

        return;
      }

      // 不成功则重置状态
      this.resetAuthStore();
    },
    /**
     * 根据token进行登录
     * @param backendToken - 返回的token
     */
    async loginByToken(backendToken: ApiAuth.Token) {
      let successFlag = false;

      // 先把token存储到缓存中(后面接口的请求头需要token)
      const { token, refreshToken, expiresIn } = backendToken;
      localStg.set('token', token, expiresIn);
      localStg.set('refreshToken', refreshToken);

      // 获取用户信息
      // const { data } = await fetchUserInfo();
      // if (data) {
      //   // 成功后把用户信息存储到缓存中
      //   localStg.set('userInfo', data);
      //
      //   // 更新状态
      //   this.userInfo = data;
      //   this.token = token;
      //
      //   successFlag = true;
      // }

      this.userInfo = {
        userId: '1',
        username: 'Lucas',
        userRole: 'admin'
      };
      localStg.set('userInfo', this.userInfo);
      this.token = token;
      successFlag = true;
      return successFlag;
    },
    /**
     * 登录
     * @param username - 用户名
     * @param password - 密码
     * @param grant_type - 授权方式
     * @param client_id - 客户端id
     * @param client_secret - 客户端密钥
     */
    // eslint-disable-next-line max-params
    async login(username: string, password: string, grant_type: string, client_id: string, client_secret: string) {
      this.loginLoading = true;
      const { data } = await fetchLogin(username, password, grant_type, client_id, client_secret);
      if (data) {
        await this.handleActionAfterLogin(data);
      }
      this.loginLoading = false;
    },
    /**
     * 更换用户权限(切换账号)
     * @param userRole
     */
    async updateUserRole(userRole: Auth.RoleType) {
      const { resetRouteStore, initAuthRoute } = useRouteStore();

      const accounts: Record<Auth.RoleType, { username: string; password: string }> = {
        super: {
          username: 'Super',
          password: 'super123'
        },
        admin: {
          username: 'Admin',
          password: 'admin123'
        },
        user: {
          username: 'User01',
          password: 'user01123'
        }
      };
      const { username, password } = accounts[userRole];
      const { data } = await fetchLogin(username, password, '', '', '');
      if (data) {
        await this.loginByToken(data);
        resetRouteStore();
        initAuthRoute();
      }
    }
  }
});
