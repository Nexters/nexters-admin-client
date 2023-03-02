import { useQuery } from '@tanstack/react-query';

import { api } from '../api';

export default function useGeneration() {
  return useQuery(['generation'], api.admin.getAllGeneration);
}
