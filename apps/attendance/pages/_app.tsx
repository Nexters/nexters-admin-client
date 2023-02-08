import { QueryClientProvider } from '@weekly/api';
import { ThemeProvider } from '@weekly/ui/theme';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  const [shouldRender, setShouldRender] = useState(
    !process.env.NEXT_PUBLIC_API_MOCKING,
  );
  useEffect(() => {
    async function init() {
      const { initMocks } = await import('@weekly/msw');
      await initMocks();
      setShouldRender(true);
    }
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      init();
    }
  }, []);
  if (!shouldRender) {
    return null;
  }
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
