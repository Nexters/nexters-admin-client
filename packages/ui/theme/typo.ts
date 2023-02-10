import { css } from '@emotion/react';

import { rem } from './common';

type TypoKey = 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption';
type WeightKey = 'bold' | 'semibold' | 'medium' | 'regular';

const sizeMap: Record<TypoKey, number> = {
  h1: 28,
  h2: 24,
  h3: 20,
  h4: 18,
  body1: 16,
  body2: 14,
  caption: 12,
};

const weightMap: Record<WeightKey, number> = {
  bold: 700,
  semibold: 600,
  medium: 500,
  regular: 400,
};

const lineHeightMap: Record<TypoKey, number> = {
  h1: 1.6,
  h2: 1.6,
  h3: 1.6,
  h4: 1.5,
  body1: 1.5,
  body2: 1.5,
  caption: 1.6,
};

const typoSchema: Record<TypoKey, Array<WeightKey>> = {
  h1: ['bold', 'medium', 'regular'],
  h2: ['bold', 'medium', 'regular'],
  h3: ['bold', 'medium', 'regular'],
  h4: ['bold', 'medium', 'regular', 'semibold'],
  body1: ['bold', 'medium', 'regular'],
  body2: ['bold', 'medium', 'regular'],
  caption: ['bold', 'medium', 'regular'],
};

function generateTypographyString(typoKey: TypoKey, weightKey: WeightKey) {
  return css`
    font-size: ${rem(sizeMap[typoKey])};
    font-weight: ${weightMap[weightKey]};
    line-height: ${lineHeightMap[typoKey]};
  `;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getTypoObjectKey(typoKey: TypoKey, weightKey: WeightKey) {
  return typoKey + capitalizeFirstLetter(weightKey);
}

type TypoObjectKey = `${TypoKey}${Capitalize<WeightKey>}`;
type TypoObject = Record<
  TypoObjectKey,
  ReturnType<typeof generateTypographyString>
>;

function getTypoObjectByTypoKey(typoKey: TypoKey, weightKeyArray: WeightKey[]) {
  return weightKeyArray.reduce((typoObject, weightKey) => {
    const key = getTypoObjectKey(typoKey, weightKey) as TypoObjectKey;
    return {
      ...typoObject,
      [key]: generateTypographyString(typoKey, weightKey),
    };
  }, {} as TypoObject);
}

function generateTypoObject(schema: typeof typoSchema): TypoObject {
  return (Object.keys(schema) as TypoKey[]).reduce(
    (typoObject, typoKey) => ({
      ...typoObject,
      ...getTypoObjectByTypoKey(typoKey, schema[typoKey]),
    }),
    {} as TypoObject,
  );
}

const typo = generateTypoObject(typoSchema);

export { typo };
