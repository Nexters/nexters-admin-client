import { useAdminSessionQuery } from '@weekly/api';
import { styled } from '@weekly/ui';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import { DashboardLayout } from '~/components/components/dashboard/DashboardLayout';
import SessionItem from '~/components/components/session/SessionItem';

function Attendance() {
  const {
    query: { generation },
  } = useRouter();

  const { data: sessions, isSuccess } = useAdminSessionQuery(
    generation as string,
  );
  return (
    <Container>
      {isSuccess && (
        <Fragment>
          {sessions.map((session) => (
            <Link href={`/attendance/${generation}/${session.id}`}>
              <SessionItem session={session} />
            </Link>
          ))}
        </Fragment>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

export default Attendance;

Attendance.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
