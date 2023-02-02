import { ThemeProvider } from '@weekly/ui/theme';
import type { AppProps } from 'next/app';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
