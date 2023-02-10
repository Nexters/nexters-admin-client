import { QueryClientProvider } from '@weekly/api';
import { palette, ThemeProvider } from '@weekly/ui';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';

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
        <NextSeo
          title="WEEKLY"
          description='Nexters 22기 출출팀 당신의 한 주의 출석을 책임지는 웹 "위클리"'
        />
        <style global jsx>
          {`
            html {
              background: ${palette.grayScale.g100};
            }
          `}
        </style>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
