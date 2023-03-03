import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../QueryClientProvider';
import { UpdateAttendanceStatusRequest } from '../../types/admin';
import { api } from '../api';

export default function useAttendanceStatus(
  id: number,
  body: UpdateAttendanceStatusRequest,
  sessionId: number,
) {
  const { mutate } = useMutation({
    mutationFn: () => api.admin.updateAttendanceStatus(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries(['attendance', sessionId]);
    },
  });

  return { mutate };
}
