import type { PropsWithChildren } from 'react';
import {
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
} from 'react-query';

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
    </BaseQueryClientProvider>
  );
}

export { queryClient, QueryClientProvider };
