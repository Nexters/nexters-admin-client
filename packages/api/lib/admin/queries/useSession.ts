import { useMutation } from '@tanstack/react-query';
import { formatYYMMDD } from '@weekly/utils';

import { queryClient } from '../../QueryClientProvider';
import { CreateSessionRequest, UpdateSessionRequest } from '../../types/admin';
import { api } from '../api';
import { sessionKeys } from '../queryKeyFactories/sessionKeys';

export default function useSession(
  data: UpdateSessionRequest | CreateSessionRequest,
  generation: number,
  id?: number,
) {
  const { mutate: updateSessionMutate } = useMutation(
    () =>
      api.admin.updateSession(id!, {
        ...data,
        sessionDate: formatYYMMDD(data.sessionDate).replace(/\./g, '-'),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(
          sessionKeys.list({ generation: Number(generation) }),
        );
      },
    },
  );
  const { mutate: createSessionMutate } = useMutation(
    () =>
      api.admin.createSession({
        ...data,
        sessionDate: formatYYMMDD(data.sessionDate).replace(/\./g, '-'),
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(
          sessionKeys.list({ generation: Number(generation) }),
        );
      },
    },
  );

  return { updateSessionMutate, createSessionMutate };
}
