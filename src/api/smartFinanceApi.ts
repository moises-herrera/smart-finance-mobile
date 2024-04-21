import axios from 'axios';
import { expoExtraConfig } from 'src/constants';
import { getToken } from 'src/helpers';

/**
 * SmartFinance API instance.
 */
const smartFinanceApi = axios.create({
  baseURL: expoExtraConfig?.API_URL,
});

smartFinanceApi.interceptors.request.use(async (config) => {
  const token = await getToken();
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default smartFinanceApi;
