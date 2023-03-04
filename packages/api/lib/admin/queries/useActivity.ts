import { useQuery } from '@tanstack/react-query';

import { api } from '../api';

export default function useActivity(generation: number) {
  return useQuery(['activity', generation], () =>
    api.admin.findActivityByGeneration(generation),
  );
}
