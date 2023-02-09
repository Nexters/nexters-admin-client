import {
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { PropsWithChildren } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
    },
    mutations: { retry: false },
  },
});

function QueryClientProvider(props: PropsWithChildren<unknown>) {
  const { children } = props;
  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV !== 'production' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </BaseQueryClientProvider>
  );
}

export { queryClient, QueryClientProvider };
