import { useQuery } from '@tanstack/react-query';

import { api } from './common';

const fetcher = {
  get: () => api.get('/attendance'),
};

function useAttendanceQuery() {
  const result = useQuery({ queryKey: ['attendance'], queryFn: fetcher.get });
  return result;
}

export { useAttendanceQuery };
