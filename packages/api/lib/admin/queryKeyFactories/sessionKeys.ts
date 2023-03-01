import { api } from '../api';

export const sessionKeys = {
  all: ['session'] as const,
  lists: () => [...sessionKeys.all, 'list'] as const,
  list: (filters: Parameters<typeof api.admin.findSessionByGeneration>[0]) =>
    [{ ...sessionKeys.lists(), filters }] as const,
};
