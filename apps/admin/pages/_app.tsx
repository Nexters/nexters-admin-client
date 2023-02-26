import localFont from '@next/font/local';
import { Hydrate, QueryClientProvider } from '@weekly/api';
import { initAuthorization } from '@weekly/api/lib/admin/api';
import { ThemeProvider } from '@weekly/ui/theme';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      initAuthorization();
    }
  }, []);

  return (
    <QueryClientProvider>
      <Hydrate state={pageProps.dehydratedState}>
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
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
