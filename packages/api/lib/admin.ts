import { useQuery } from 'react-query';

import { api } from './common';

const fetcher = {
  get: (generation: number) => () => api.get(`/attendance/${generation}`),
};

function useAdminAttendanceQuery(generation: number) {
  const result = useQuery(['admin', 'attendance'], fetcher.get(generation));
  return result;
}

export { useAdminAttendanceQuery };
