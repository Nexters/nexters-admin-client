import { useQuery } from '@tanstack/react-query';

import { api } from './common';

const fetcher = {
  get: () => api.get('/book'),
};

function useAdminAttendanceQuery(generation: number) {
  const result = useQuery({
    queryKey: ['admin', 'attendance'],
    queryFn: fetcher.get,
  });
  return result;
}

export { useAdminAttendanceQuery };
