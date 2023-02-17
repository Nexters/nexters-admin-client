import localFont from '@next/font/local';
import { QueryClientProvider } from '@weekly/api';
import { palette, Snackbar, ThemeProvider } from '@weekly/ui';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import { Layout } from '~/components';

const pretandard = localFont({
  src: [
    {
      path: '../public/Pretendard-Bold.subset.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../public/Pretendard-Semibold.subset.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/Pretendard-Medium.subset.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/Pretendard-Regular.subset.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
});

function App(props: AppProps) {
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
        <style global jsx>
          {`
            html {
              background: ${palette.grayScale.g100};
              font-family: ${pretandard.style.fontFamily};
            }
          `}
        </style>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <Snackbar />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
