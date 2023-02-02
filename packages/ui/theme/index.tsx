import { Global, ThemeProvider as BaseThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';

import { globalStyle } from './global';
import { media, theme } from './theme';

function ThemeProvider(props: PropsWithChildren<unknown>) {
  const { children } = props;
  return (
    <BaseThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      {children}
    </BaseThemeProvider>
  );
}

export { media, ThemeProvider };
