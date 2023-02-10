import '@emotion/react';

import { palette, rem, typo } from '../theme';

declare module '@emotion/react' {
  export interface Theme {
    palette: typeof palette;
    typo: typeof typo;
    rem: typeof rem;
  }
}
