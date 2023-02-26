import { useQuery } from '@tanstack/react-query';

import { Session } from '../../dto/admin';
import type {
  FindSessionHomeResponse,
  SessionHomeResponse,
} from '../../dto/attendance';
import { useAxios } from '../AxiosProvider';
import type { QueryParams } from '../common/types';
import { API_URL } from './urls';

function useSessionQuery(params?: QueryParams<SessionHomeResponse>) {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get<FindSessionHomeResponse>(API_URL.HOME);
    return data.data;
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
