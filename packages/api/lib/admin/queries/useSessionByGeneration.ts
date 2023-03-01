import { QueryFunctionContext, useQuery } from '@tanstack/react-query';

import { api } from '../api';
import { sessionKeys } from '../queryKeyFactories/sessionKeys';

type Params = Parameters<typeof api.admin.findSessionByGeneration>[0];
type QueryKey = QueryFunctionContext<ReturnType<typeof sessionKeys.list>>;

function fetcher({ queryKey: [{ filters }] }: QueryKey) {
  return api.admin.findSessionByGeneration(filters);
}

export default function useSessionByGeneration(param: Params) {
  const queryKey = sessionKeys.list(param);
  return useQuery({ queryFn: fetcher, queryKey });
}
