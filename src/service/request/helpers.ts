import type { AxiosRequestConfig } from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from '@/config';
import { useAuthStore } from '@/store';
import { localStg } from '@/utils';
import { fetchUpdateToken } from '../api';

/**
 * 刷新token
 * @param axiosConfig - token失效时的请求配置
 */
export async function handleRefreshToken(axiosConfig: AxiosRequestConfig) {
  const { resetAuthStore } = useAuthStore();
  const refreshToken = localStg.get('refreshToken') || '';
  const { data } = await fetchUpdateToken(refreshToken, 'refresh_token', CLIENT_ID, CLIENT_SECRET);
  if (data) {
    localStg.set('token', data.token);
    localStg.set('refreshToken', data.refreshToken);

    const config = { ...axiosConfig };
    if (config.headers) {
      config.headers.Authorization = `Bearer ${data.token}`;
    }
    return config;
  }

  resetAuthStore();
  return null;
}
