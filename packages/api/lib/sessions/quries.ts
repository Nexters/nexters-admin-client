import { useQuery } from '@tanstack/react-query';

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

export { useSessionQuery };
