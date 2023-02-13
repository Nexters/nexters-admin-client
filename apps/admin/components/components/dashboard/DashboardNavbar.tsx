import { styled } from '@weekly/ui';
import React from 'react';

interface DashboardNavbarProps {}

type Props = Partial<DashboardNavbarProps>;

function DashboardNavbar(props: React.PropsWithChildren<Props>) {
  const { children } = props;
  return <Container>{children}</Container>;
}

const Container = styled.header`
  position: fixed;
  left: 132px;
  top: 0;
  display: flex;
  align-items: center;
  min-height: 102px;
  width: calc(100% - 132px);
  padding-inline: 40px;
  background-color: antiquewhite;
  box-sizing: border-box;
`;

export { DashboardNavbar };
