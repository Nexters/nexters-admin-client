import type { PropsWithChildren } from 'react';

import { styled } from '../emotion';

type ChipType = 'alert' | 'success' | 'info';
interface ChipProps extends PropsWithChildren<unknown> {
  type: ChipType;
}

type Props = Partial<ChipProps>;

function Chip(props: Props) {
  const { type = 'info', children } = props;
  return <Container type={type}>{children}</Container>;
}

const Container = styled.div<ChipProps>`
  display: inline-block;
  ${({ type, theme }) =>
    type === 'info' ? theme.typo.h4Semibold : theme.typo.body1Bold}
  border-radius: ${({ theme }) => theme.rem(12)};
  padding: ${({ theme }) => theme.rem(4)} ${({ theme }) => theme.rem(12)};
  color: ${({ type, theme }) =>
    type === 'info'
      ? theme.palette.grayScale.g10
      : type === 'alert'
        ? theme.palette.main.red100
        : theme.palette.main.green100};
  background-color: ${({ type, theme }) =>
    type === 'info'
      ? theme.palette.grayScale.g80
      : `${
        type === 'alert'
          ? theme.palette.main.red100
          : theme.palette.main.green50
      }1E`};
`;

export { Chip };
