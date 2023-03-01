import type { DehydratedState } from '@tanstack/react-query';
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AxiosProvider } from './AxiosProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 15000,
    },
    mutations: { retry: false },
  },
});

function QueryClientProvider(props: React.PropsWithChildren<unknown>) {
  const { children } = props;
  return (
    <AxiosProvider>
      <BaseQueryClientProvider client={queryClient}>
        {children}
        {process.env.NODE_ENV !== 'production' && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </BaseQueryClientProvider>
    </AxiosProvider>
  );
}

export { dehydrate, Hydrate, QueryClient, queryClient, QueryClientProvider };
export type { DehydratedState };
