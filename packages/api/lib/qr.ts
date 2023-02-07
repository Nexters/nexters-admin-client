import { useQuery } from '@tanstack/react-query';

import { api } from './common';

const fetcher = {
  get: () => api.get('/qr'),
};

function useQRQuery() {
  const result = useQuery({ queryKey: ['qr'], queryFn: fetcher.get });
  return result;
}

export { useQRQuery };
