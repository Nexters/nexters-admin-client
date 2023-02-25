import { useMeQuery, useSessionQuery } from '@weekly/api';
import { styled } from '@weekly/ui';
import { isToday, useMinimumWaiting } from '@weekly/utils';
import { useRouter } from 'next/router';
import { Fragment, useLayoutEffect, useState } from 'react';

import { onInvalidTokenError } from '~/utils/error';
import { getSessionDescriptionMessage } from '~/utils/message';

import { Loader } from '../Loader';
import { CameraButton } from './CameraButton';
import { EmptyCard } from './EmptyCard';
import { MenuButton } from './MenuButton';
import { SessionCard } from './SessionCard';
import { Sidebar } from './Sidebar';
import { SocialLinks } from './SocialLinks';

function HomePage() {
  const { pathname } = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isOneSecondLoading = useMinimumWaiting();
  const sessionQueryResult = useSessionQuery();
  const meQueryResult = useMeQuery({
    onError: onInvalidTokenError,
  });
  const isEmptySession = sessionQueryResult.data == null;
  const isTodaySession = !!sessionQueryResult.data && isToday(sessionQueryResult.data.sessionDate);
  const isSessionPending = !!sessionQueryResult.data && sessionQueryResult.data.sessionStatus === 'PENDING';
  const isDisplayCameraButton = !!sessionQueryResult.data
    && sessionQueryResult.data.attendanceStatus === 'PENDING'
    && !isSessionPending;
  const onClickMenuButton = () => setSidebarOpen(true);
  const onCloseSidebar = () => setSidebarOpen(false);
  useLayoutEffect(() => {
    if (sidebarOpen) {
      onCloseSidebar();
    }
  }, [pathname]);
  return (
    <Container>
      {sessionQueryResult.isLoading ||
        meQueryResult.isLoading ||
        isOneSecondLoading ? (
          <Loader />
        ) : (
          <Fragment>
            <MenuButton
              onClick={onClickMenuButton}
              disabled={meQueryResult.isLoading}
            />
            {!isEmptySession ? (
              <SessionCard {...sessionQueryResult.data} />
            ) : (
              <EmptyCard />
            )}
            <Description>
              {getSessionDescriptionMessage({ isEmptySession, isTodaySession, isSessionPending, isDisplayCameraButton })}
            </Description>
            {isEmptySession && <SocialLinks />}
            {isDisplayCameraButton && <CameraButton />}
            {meQueryResult.data && (
              <Sidebar
                open={sidebarOpen}
                onClose={onCloseSidebar}
                user={meQueryResult.data}
              />
            )}
          </Fragment>
        )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Description = styled.p`
  ${({ theme }) => theme.typo.body2Medium}
  margin-top: ${({ theme }) => theme.rem(20)};
  color: ${({ theme }) => theme.palette.grayScale.white};
`;

export { HomePage };
