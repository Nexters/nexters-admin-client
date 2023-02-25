import { useQuery } from '@tanstack/react-query';

import { Session } from '../../dto/admin';
import { useAxios } from '../AxiosProvider';
import type { QueryParams } from '../common/types';
import { API_URL } from './urls';

function useSessionQuery(params?: QueryParams<Session>) {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get(API_URL.HOME);
    return data;
  };
  return useQuery({ queryKey: ['sessions', 'home'], queryFn, ...params });
}

function useAdminSessionQuery(generation: string) {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get<Session[]>(
      `${API_URL.ADMIN}?generation=${generation}`,
    );
    return data;
  };
  return useQuery({ queryKey: ['session', generation], queryFn });
}

export { useAdminSessionQuery, useSessionQuery };
