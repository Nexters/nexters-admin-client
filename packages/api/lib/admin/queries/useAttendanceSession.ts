import { useQuery } from '@tanstack/react-query';

import { api } from '../api';

export default function useAttendanceSession(sessionId: number) {
  return useQuery(['attendance', sessionId], () =>
    api.admin.findAttendanceBySession(sessionId),
  );
}
