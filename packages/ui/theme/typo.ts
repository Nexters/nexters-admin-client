import { css } from '@emotion/react';

export const rem = (px: number) => `${px / 16}rem`;

const sizeMap = {
  h1: 28,
  h2: 24,
  h3: 20,
  h4: 18,
  body1: 16,
  body2: 14,
  caption: 12,
} as const;

const weightMap = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
} as const;

function generateTypographyString(
  size: keyof typeof sizeMap,
  weight: keyof typeof weightMap
) {
  return css`
    font-size: ${rem(sizeMap[size])};
    font-weight: ${weightMap[weight]};
  `;
}

export const typo = {
  h1Bold: generateTypographyString('h1', 'bold'),
  h1Medium: generateTypographyString('h1', 'medium'),
  h1Regular: generateTypographyString('h1', 'regular'),
  h2Bold: generateTypographyString('h2', 'bold'),
  h2Medium: generateTypographyString('h2', 'medium'),
  h2Regular: generateTypographyString('h2', 'regular'),
  h3Bold: generateTypographyString('h3', 'bold'),
  h3Medium: generateTypographyString('h3', 'medium'),
  h3Regular: generateTypographyString('h3', 'regular'),
  h4Bold: generateTypographyString('h4', 'bold'),
  h4SemiBold: generateTypographyString('h4', 'semibold'),
  h4Medium: generateTypographyString('h4', 'medium'),
  h4Regular: generateTypographyString('h4', 'regular'),
  body1Bold: generateTypographyString('body1', 'bold'),
  body1Medium: generateTypographyString('body1', 'medium'),
  body1Regular: generateTypographyString('body1', 'regular'),
  body2Bold: generateTypographyString('body2', 'bold'),
  body2Medium: generateTypographyString('body2', 'medium'),
  body2Regular: generateTypographyString('body2', 'regular'),
  captionBold: generateTypographyString('caption', 'bold'),
  captionMedium: generateTypographyString('caption', 'medium'),
  captionRegular: generateTypographyString('caption', 'regular'),
} as const;
