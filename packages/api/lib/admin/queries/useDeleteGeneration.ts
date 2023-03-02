import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../QueryClientProvider';
import { api } from '../api';

function useDeleteGeneration() {
  const { mutate } = useMutation({
    mutationFn: api.admin.deleteGeneration,
    onSuccess() {
      queryClient.invalidateQueries(['generation']);
    },
  });

  return { mutate };
}

export default useDeleteGeneration;
