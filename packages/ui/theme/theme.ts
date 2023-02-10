import type { Theme } from '@emotion/react';

import { rem } from './common';
import { palette } from './palette';
import { typo } from './typo';

const theme: Theme = {
  palette,
  typo,
  rem,
};

const customMediaQuery = (minWidth: number): string =>
  `@media (min-width: ${minWidth}px)`;

const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(768),
  mobile: '@media (max-width : 767px)',
};

export { customMediaQuery, media, theme };
