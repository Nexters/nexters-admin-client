import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider as BaseQueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
    <BaseQueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </BaseQueryClientProvider>
  );
}

export { dehydrate, Hydrate, QueryClient, queryClient, QueryClientProvider };
