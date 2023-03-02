import { dehydrate, QueryClient, useSessionByGeneration } from '@weekly/api';
import { FindSessionResponse } from '@weekly/api/dto/admin';
import { api } from '@weekly/api/lib/admin/api';
import { sessionKeys } from '@weekly/api/lib/admin/queryKeyFactories/sessionKeys';
import { Button, Modal, styled } from '@weekly/ui';
import { isString } from '@weekly/utils';
import { GetServerSidePropsContext } from 'next/types';
import { Fragment, useEffect, useState } from 'react';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import SessionItem from '~/components//session/SessionItem';
import { AuthGuard } from '~/components/authentication/AuthGuard';
import SessionModal from '~/components/session/SessionModal';

interface SessionProps {
  generation: string;
}

function Session({ generation }: SessionProps) {
  const { data: sessions } = useSessionByGeneration({
    generation: Number(generation),
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSession, setSelectedSession] =
    useState<FindSessionResponse | null>(null);

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSession(null);
  };

  useEffect(() => {
    !modalOpen && setSelectedSession(null);
  }, [modalOpen]);

  return (
    <Container>
      <Button size='small' onClick={() => setModalOpen(true)}>
        세션 추가
      </Button>
      {sessions ? (
        <SessionContainer>
          <Fragment>
            {sessions.data.map((session) => (
              <SessionItem
                key={session.id}
                onClick={() => {
                  setSelectedSession(session);
                  setModalOpen(true);
                }}
                title={session.title}
                description={session.description}
                generation={session.generation}
                sessionDate={session.sessionDate}
                week={session.week}
              />
            ))}
          </Fragment>
          <Modal isOpen={modalOpen} onDismiss={closeModal}>
            <SessionModal session={selectedSession} closeModal={closeModal} />
          </Modal>
        </SessionContainer>
      ) : (
        <></>
      )}
    </Container>
  );
}

const Container = styled.div``;

const SessionContainer = styled.div`
  display: flex;
  margin-top: 24px;
  column-gap: 24px;
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

export default Session;

Session.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
