import { Global, ThemeProvider as BaseThemeProvider } from '@emotion/react';
import { PropsWithChildren } from 'react';

import { globalStyle } from './global';
import { palette } from './palette';
import { media, theme } from './theme';
import { typo } from './typo';

function ThemeProvider(props: PropsWithChildren<unknown>) {
  const { children } = props;
  return (
    <BaseThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      {children}
    </BaseThemeProvider>
  );
}

export { media, palette, ThemeProvider, typo };
