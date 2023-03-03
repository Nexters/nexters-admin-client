import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../QueryClientProvider';
import { api } from '../api';

function useCreateGeneration() {
  const { mutate } = useMutation({
    mutationFn: api.admin.createGeneration,
    onSuccess() {
      queryClient.invalidateQueries(['generation']);
    },
  });

  return { mutate };
}

export default useCreateGeneration;
