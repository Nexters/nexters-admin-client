import { useQuery } from '@tanstack/react-query';

import { api } from './common';

const fetcher = {
  get: async () => {
    const { data } = await api.get<{ title: string; description: string }>(
      '/book',
    );
    return data;
  },
};

function useAdminAttendanceQuery() {
  const result = useQuery({
    queryKey: ['admin', 'attendance'],
    queryFn: fetcher.get,
  });
  return result;
}

export { useAdminAttendanceQuery };
