import { useQuery } from '@tanstack/react-query';

import { api } from './common';

const fetcher = {
  get: () => api.get('/qr'),
};

function useQRQuery() {
  const result = useQuery('qr', fetcher.get);
  return result;
}

export { useQRQuery };
