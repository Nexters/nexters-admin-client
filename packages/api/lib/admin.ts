import { useQuery } from '@tanstack/react-query';

import { api } from './common';

const fetcher = {
  get: () => api.get('/book'),
};

function useAdminAttendanceQuery() {
  const result = useQuery(['admin', 'attendance'], fetcher.get);
  return result;
}

export { useAdminAttendanceQuery };
