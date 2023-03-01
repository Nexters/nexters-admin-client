import { useQuery } from '@tanstack/react-query';

import { GenerationResponses } from '../../dto/admin';
import { useAxios } from '../AxiosProvider';
import { API_URL } from './urls';

function useGenerationQuery() {
  const axios = useAxios();
  const queryFn = async () => {
    const { data } = await axios.get<GenerationResponses>(API_URL.TOTAL);
    return data;
  };
  return useQuery({ queryKey: ['generation'], queryFn });
}

export { useGenerationQuery };
