import { QueryClientProvider } from '@weekly/api';
import { ThemeProvider } from '@weekly/ui/theme';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

type EnhancedAppProps = AppProps & {
  Component: NextPage;
  pageProps: Record<string, unknown>;
};

function App(props: EnhancedAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

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
      <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
