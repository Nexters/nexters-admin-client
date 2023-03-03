import { useMutation } from '@tanstack/react-query';

import { queryClient } from '../../QueryClientProvider';
import { UpdateExtraAttendanceScoreChangeRequest } from '../../types/admin';
import { api } from '../api';

export default function useAttendanceAdditionalScore(
  id: number,
  body: UpdateExtraAttendanceScoreChangeRequest,
  sessionId: number,
) {
  const { mutate } = useMutation({
    mutationFn: () => api.admin.updateAttendanceAdditionalScore(id, body),
    onSuccess: () => {
      queryClient.invalidateQueries(['attendance', sessionId]);
    },
  });

  return { mutate };
}
