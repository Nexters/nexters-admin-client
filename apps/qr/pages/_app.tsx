import localFont from '@next/font/local';
import { QueryClientProvider } from '@weekly/api';
import { initAuthorization } from '@weekly/api/lib/admin/api';
import { palette, ThemeProvider } from '@weekly/ui';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useEffect } from 'react';

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

// TODO: URL이 달라지면 토큰 인증 처리 어떻게하지
const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      initAuthorization();
    }
  }, []);
  return (
    <QueryClientProvider>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon-16x16.png'
        />
      </Head>
      <style global jsx>
        {`
          html {
            background: ${palette.grayScale.g100};
            font-family: ${pretandard.style.fontFamily};
          }
        `}
      </style>
      <NextSeo
        title='WEEKLY | 출석'
        description='Nexters 22기 출출팀 당신의 한 주의 출석을 책임지는 웹 "위클리"'
      />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
