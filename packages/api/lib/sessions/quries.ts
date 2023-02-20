import { useQuery } from '@tanstack/react-query';

import { useAxios } from '../AxiosProvider';
import type { Session } from './types';
import { API_URL } from './urls';

function useSessionQuery() {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get<Session>(API_URL.HOME);
    return data;
  };
  return useQuery({ queryKey: ['sessions', 'home'], queryFn });
}

export { useSessionQuery };
