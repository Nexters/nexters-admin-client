import {
  dehydrate,
  DehydratedState,
  QueryClient,
  queryClient,
} from '@weekly/api';
import { FindSessionResponses } from '@weekly/api/dto/admin';
import { api } from '@weekly/api/lib/admin/api';
import { sessionKeys } from '@weekly/api/lib/admin/queryKeyFactories/sessionKeys';
import { Icon, styled } from '@weekly/ui';
import { isString } from '@weekly/utils';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next/types';
import { Fragment } from 'react';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import SessionItem from '~/components//session/SessionItem';
import { AuthGuard } from '~/components/authentication/AuthGuard';

interface AttendanceProps {
  dehydrateState: DehydratedState;
  generation: string;
}

function Attendance(props: AttendanceProps) {
  const sessions = queryClient.getQueryData<FindSessionResponses>(
    sessionKeys.list({ generation: Number(props.generation) }),
  );

  return (
    <Container>
      <Fragment>
        {sessions?.data.map(
          ({ id, title, description, generation, sessionDate, week }) => (
            <Link key={id} href={`${generation}/${id}`}>
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
        {sessions?.data.length === 0 && (
          <EmptySession>
            <Icon name='box' />
            <p>{'출석 관리에 필요한 정보가\n존재하지 않습니다.'}</p>
          </EmptySession>
        )}
      </Fragment>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const EmptySession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.palette.grayScale.g50};
  margin: auto;
  padding-top: 200px;
  p {
    margin-top: 14px;
    white-space: pre-wrap;
    text-align: center;
  }
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
