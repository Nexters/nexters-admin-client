import { useQuery } from '@tanstack/react-query';
import type { Session } from '@weekly/msw';
import { API_URL } from '@weekly/msw';

import { useAxios } from './AxiosProvider';

function useSessionQuery() {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get<Session>(API_URL.HOME);
    return data;
  };
  return useQuery({ queryKey: ['sessions', 'home'], queryFn });
}

export { useSessionQuery };
