import localFont from '@next/font/local';
import { QueryClientProvider } from '@weekly/api';
import { palette, ThemeProvider } from '@weekly/ui';
import type { AppProps } from 'next/app';

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

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <QueryClientProvider>
      <style global jsx>
        {`
          html {
            background: ${palette.grayScale.g100};
            font-family: ${pretandard.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
