import { QueryClientProvider } from '@weekly/api';
import { ThemeProvider } from '@weekly/ui/theme';
import type { AppProps } from 'next/app';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
