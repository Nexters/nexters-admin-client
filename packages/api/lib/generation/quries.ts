import { useQuery } from '@tanstack/react-query';

import { useAxios } from '../AxiosProvider';
import { API_URL } from './urls';

function useGenerationQuery() {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get(API_URL.TOTAL);
    return data;
  };
  return useQuery({ queryKey: ['generation'], queryFn });
}

export { useGenerationQuery };
