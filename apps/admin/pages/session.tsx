import { useAdminSessionQuery } from '@weekly/api';
import { Button, styled } from '@weekly/ui';
import { Fragment } from 'react';

import { DashboardLayout } from '~/components/components/dashboard/DashboardLayout';
import SessionItem from '~/components/components/session/SessionItem';

function Session() {
  const { data: sessions, isSuccess } = useAdminSessionQuery('22');

  return (
    <Container>
      <Button size='small'>세션 추가</Button>
      <SessionList>
        {isSuccess && (
          <Fragment>
            {sessions.map((session) => (
              <SessionItem session={session} />
            ))}
          </Fragment>
        )}
      </SessionList>
    </Container>
  );
}

const Container = styled.div``;

const SessionList = styled.div`
  display: flex;
  gap: 24px;
`;

Session.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Session;
