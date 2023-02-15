import { styled } from '@weekly/ui';
import type { PropsWithChildren } from 'react';
import { Fragment } from 'react';

import { DashboardNavbar } from './DashboardNavbar';
import { DashboardSidebar } from './DashboardSidebar';

interface DashboardLayoutProps {}

type Props = Partial<DashboardLayoutProps>;

function DashboardLayout(props: PropsWithChildren<Props>) {
  const { children } = props;
  return (
    <Fragment>
      <DashboardRoot>
        <Main>{children}</Main>
      </DashboardRoot>
      <DashboardNavbar>HEADER</DashboardNavbar>
      <DashboardSidebar />
    </Fragment>
  );
}

const DashboardRoot = styled.div`
  background-color: aliceblue;
  flex: 1 1 auto;
  max-width: 100%;
  padding-top: 102px;
  padding-left: 132px;
`;

const Main = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding-inline: 40px;
  padding-top: 24px;
  width: 100%;
`;

export { DashboardLayout };
