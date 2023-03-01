import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { FindSessionHomeResponse } from '../../types/attendance';
import { api } from '../api';

export default function useSessionHome(options: UseQueryOptions<FindSessionHomeResponse>) {
  return useQuery({
    queryFn: api.attendance.sessionHome,
    queryKey: ['session', 'home'],
    ...options,
  });
}
