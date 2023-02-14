import { styled } from '@weekly/ui';
import type { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren<unknown> {}

type Props = Partial<LayoutProps>;

function Layout(props: Props) {
  const { children } = props;
  return <Container>{children}</Container>;
}

const Container = styled.div<LayoutProps>`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: ${({ theme }) => theme.rem(320)};
  max-width: ${({ theme }) => theme.rem(743)};
  padding: 0 ${({ theme }) => theme.rem(20)};
  background-color: ${({ theme }) => theme.palette.grayScale.g100};
`;

export { Layout };
