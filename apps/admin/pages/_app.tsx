import localFont from '@next/font/local';
import { QueryClientProvider } from '@weekly/api';
import { ThemeProvider } from '@weekly/ui/theme';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';


type EnhancedAppProps = AppProps & {
  Component: NextPage;
  pageProps: Record<string, unknown>;
};

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

function App(props: EnhancedAppProps) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  const [shouldRender, setShouldRender] = useState(
    process.env.NEXT_PUBLIC_API_MOCKING !== 'enabled',
  );
  useEffect(() => {
    async function init() {
      const { initMocks } = await import('@weekly/api');
      await initMocks();
    }
    init();
    setShouldRender(true);
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
              font-family: ${pretandard.style.fontFamily};
            }
          `}
        </style>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
