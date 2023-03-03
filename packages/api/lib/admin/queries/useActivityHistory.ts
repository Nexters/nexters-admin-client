import { useQuery } from '@tanstack/react-query';

import { api } from '../api';

export default function useActivityHistory(
  generationMemberId: number,
  generation: number,
) {
  return useQuery(['activity', 'history', generation, generationMemberId], () =>
    api.admin.findActivityHistory(generationMemberId, generation),
  );
}
