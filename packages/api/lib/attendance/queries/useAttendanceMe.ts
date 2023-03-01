import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { AttendanceProfileResponse } from '../../types/attendance';
import { api } from '../api';

export default function useAttendanceMe(options: UseQueryOptions<AttendanceProfileResponse>) {
  return useQuery({
    queryFn: api.attendance.attendanceMe,
    queryKey: ['attendance', 'me'],
    ...options,
  });
}
