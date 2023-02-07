import '@emotion/react';

import { palette, typo } from '../theme';

declare module '@emotion/react' {
  export interface Theme {
    palette: typeof palette;
    typo: typeof typo;
  }
}
