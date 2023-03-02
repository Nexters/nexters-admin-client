import { dehydrate, QueryClient, useSessionByGeneration } from '@weekly/api';
import { api } from '@weekly/api/lib/admin/api';
import { sessionKeys } from '@weekly/api/lib/admin/queryKeyFactories/sessionKeys';
import { FindSessionResponse } from '@weekly/api/lib/types/admin';
import { Button, Modal, styled } from '@weekly/ui';
import { isString } from '@weekly/utils';
import { GetServerSidePropsContext } from 'next/types';
import { Fragment, useEffect, useState } from 'react';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import SessionItem from '~/components//session/SessionItem';
import { AuthGuard } from '~/components/authentication/AuthGuard';
import Empty from '~/components/dashboard/\bEmpty';
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
    <Fragment>
      <CreateSessionButton size='small' onClick={() => setModalOpen(true)}>
        세션 추가
      </CreateSessionButton>
      {sessions?.data.length ? (
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
                isEdit
              />
            ))}
          </Fragment>
          <Modal isOpen={modalOpen} onDismiss={closeModal}>
            <SessionModal session={selectedSession} closeModal={closeModal} />
          </Modal>
        </SessionContainer>
      ) : (
        <Empty message={'아직 세션이 없어요.\n세션을 추가해주세요.'} />
      )}
    </Fragment>
  );
}

const CreateSessionButton = styled(Button)`
  display: block;
  margin-left: auto;
`;

const SessionContainer = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 24px;
  flex-wrap: wrap;
  button {
    flex-shrink: 0;
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

export default Session;

Session.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
