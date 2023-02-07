import { useQuery } from '@tanstack/react-query';

import { api } from './common';

const fetcher = {
  get: (generation: number) => () => api.get(`/attendance/${generation}`),
};

function useAdminAttendanceQuery(generation: number) {
  const result = useQuery({
    queryKey: ['admin', 'attendance'],
    queryFn: () => fetcher.get(generation),
  });
  return result;
}

export { useAdminAttendanceQuery };
