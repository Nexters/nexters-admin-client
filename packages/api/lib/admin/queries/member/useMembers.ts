import { QueryFunctionContext, useQuery } from '@tanstack/react-query';

import { api } from '../../api';
import { memberKeys } from '../../queryKeyFactories/memberKeys';

type Params = Parameters<typeof api.admin.findAllByAdministrator>[0];
type QueryKey = QueryFunctionContext<ReturnType<typeof memberKeys.list>>;

function fetcher({ queryKey: [{ filters }] }: QueryKey) {
  return api.admin.findAllByAdministrator(filters);
}

export default function useMembers(param: Params) {
  const queryKey = memberKeys.list(param);
  return useQuery(queryKey, fetcher, {
    select(data) {
      return data.data;
    },
  });
}
