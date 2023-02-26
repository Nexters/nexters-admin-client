import { dehydrate, QueryClient, useSessionByGeneration } from '@weekly/api';
import { api } from '@weekly/api/lib/admin/api';
import { sessionKeys } from '@weekly/api/lib/admin/queryKeyFactories/sessionKeys';
import { styled } from '@weekly/ui';
import { isString } from '@weekly/utils';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next/types';
import { Fragment } from 'react';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import SessionItem from '~/components//session/SessionItem';
import { AuthGuard } from '~/components/authentication/AuthGuard';

function Attendance() {
  const { data: sessions } = useSessionByGeneration({ generation: 22 });

  return (
    <Container>
      <Fragment>
        {sessions?.data.map(
          ({ id, title, description, generation, sessionDate, week }) => (
            <Link key={id} href={''}>
              <SessionItem
                title={title}
                description={description}
                generation={generation}
                sessionDate={sessionDate}
                week={week}
              />
            </Link>
          ),
        )}
      </Fragment>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

export async function getServerSideProps({
  req,
  query,
}: GetServerSidePropsContext) {
  const { generation } = query;

  const queryClient = new QueryClient();
  api.setSecureData(req.cookies.accessToken);

  if (isNaN(Number(generation))) {
    return {
      props: {},
    };
  }
  if (isString(generation)) {
    await queryClient.fetchQuery(
      sessionKeys.list({ generation: Number(generation) }),
      async () =>
        api.admin.findSessionByGeneration({ generation: Number(generation) }),
    );

    return {
      props: { dehydratedState: dehydrate(queryClient), generation },
    };
  }
}

export default Attendance;

Attendance.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
