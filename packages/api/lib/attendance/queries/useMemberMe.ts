import { useQuery, UseQueryOptions } from '@tanstack/react-query';

import { FindProfileResponse } from '../../types/attendance';
import { api } from '../api';

export default function useMemberMe(options: UseQueryOptions<FindProfileResponse>) {
  return useQuery({
    queryFn: api.attendance.memberMe,
    queryKey: ['member', 'me'],
    ...options,
  });
}
