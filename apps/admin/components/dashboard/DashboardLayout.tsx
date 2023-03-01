import { useGenerationQuery } from '@weekly/api';
import { styled } from '@weekly/ui';
import { Fragment } from 'react';

import { DashboardNavbar } from './DashboardNavbar';
import { DashboardSidebar } from './DashboardSidebar';

type DashboardLayoutProps = {};
type Props = Partial<DashboardLayoutProps>;

function DashboardLayout(props: React.PropsWithChildren<Props>) {
  const { children } = props;
  const { data: generations, isSuccess } = useGenerationQuery();
  return (
    <Fragment>
      {isSuccess && (
        <Fragment>
          <DashboardRoot>
            <Main>{children}</Main>
          </DashboardRoot>
          <DashboardNavbar generations={generations} />
          <DashboardSidebar />
        </Fragment>
      )}
    </Fragment>
  );
}

const DashboardRoot = styled.div`
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
