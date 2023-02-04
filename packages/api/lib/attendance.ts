import { useQuery } from 'react-query';

import { api } from './common';

const fetcher = {
  get: () => api.get('/attendance'),
};

function useAttendanceQuery() {
  const result = useQuery(['attendance'], fetcher.get);
  return result;
}

export { useAttendanceQuery };
