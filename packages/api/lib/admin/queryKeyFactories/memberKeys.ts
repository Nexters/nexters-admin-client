import { api } from '../api';

export const memberKeys = {
  all: ['member'] as const,
  lists: () => [...memberKeys.all, 'list'] as const,
  list: (filters: Parameters<typeof api.admin.findAllByAdministrator>[0]) =>
    [{ ...memberKeys.lists(), filters }] as const,
};
