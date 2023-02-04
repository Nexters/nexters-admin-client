import {
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { PropsWithChildren } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { suspense: true, useErrorBoundary: true },
    mutations: { useErrorBoundary: true },
  },
});

function QueryClientProvider(props: PropsWithChildren<unknown>) {
  const { children } = props;
  return (
    <BaseQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools
        initialIsOpen={process.env.NODE_ENV !== 'production'}
      />
    </BaseQueryClientProvider>
  );
}

export { queryClient, QueryClientProvider };
