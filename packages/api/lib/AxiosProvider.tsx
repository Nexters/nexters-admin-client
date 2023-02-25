import { getAuthToken } from '@weekly/utils';
import type { AxiosInstance } from 'axios';
import axios from 'axios';
import type { PropsWithChildren } from 'react';
import { createContext, useContext, useMemo } from 'react';

const AxiosContext = createContext<AxiosInstance | null>(null);

function AxiosProvider(props: PropsWithChildren<unknown>) {
  const { children } = props;
  const api = useMemo(() => {
    const instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'https://mock-api-server',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        accept: 'application/json,',
      },
    });

    instance.interceptors.request.use((config) => {
      const token = getAuthToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });
    return instance;
  }, []);
  return <AxiosContext.Provider value={api}>{children}</AxiosContext.Provider>;
}

function useAxios() {
  const axios = useContext(AxiosContext);
  if (!axios) {
    throw new Error('[useAxios]: AxiosContextProvider에 value가 없습니다.');
  }
  return axios;
}

export { AxiosProvider, useAxios };
