import { useMemberMe, useSessionHome } from '@weekly/api';
import { Icon, styled } from '@weekly/ui';
import { formatHHMMSS, isToday, useMinimumWaiting } from '@weekly/utils';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { onInvalidTokenError } from '~/utils/error';
import { getAttendanceStatusMessage, getSessionDescriptionMessage } from '~/utils/message';

import { Loader } from '../Loader';
import { AttendanceCard } from './AttendanceCard';
import { CameraButton } from './CameraButton';
import { EmptyCard } from './EmptyCard';
import { MenuButton } from './MenuButton';
import { SessionCard } from './SessionCard';
import { Sidebar } from './Sidebar';
import { SocialLinks } from './SocialLinks';

function HomePage() {
  const { pathname } = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const wait = useMinimumWaiting();
  const sessionQueryResult = useSessionHome({
    onError: onInvalidTokenError,
  });
  const meQueryResult = useMemberMe({
    onError: onInvalidTokenError,
  });

  const { data: sessionQueryResultData } = sessionQueryResult.data ?? {};
  const { sessionDate, sessionStatus, attendanceStatus, attendanceTime } = sessionQueryResultData ?? {};
  const attendanceMessage = attendanceStatus
    ? getAttendanceStatusMessage(attendanceStatus)
    : undefined;

  const isLoading = sessionQueryResult.isLoading || meQueryResult.isLoading || wait;
  const isEmptySession = sessionQueryResultData === null;
  const isTodaySession = !!sessionDate && isToday(sessionDate);
  const isSessionPending = !!sessionStatus && sessionStatus === 'PENDING';
  const isDisplayCameraButton = !!attendanceStatus && attendanceStatus === 'PENDING' && !isSessionPending;
  const isAttendanceComplete = !!attendanceStatus && (attendanceStatus === 'ATTENDED' || attendanceStatus === 'TARDY');

  const onClickMenuButton = () => setSidebarOpen(true);
  const onCloseSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    if (sidebarOpen) {
      onCloseSidebar();
    }
  }, [pathname]);

  return (
    <Container>
      <MenuButton
        onClick={onClickMenuButton}
        disabled={isLoading}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          {isEmptySession
            ? <EmptyCard />
            : isAttendanceComplete
              ? <AttendanceCard {...sessionQueryResult.data} />
              : <SessionCard {...sessionQueryResult.data} />}
          {isAttendanceComplete && attendanceMessage && attendanceTime
            ? (
              <AttendanceCompleteText>
                <Icon name='checkCircle' />
                {attendanceMessage}
                <AttendanceTimeText>
                  {formatHHMMSS(attendanceTime)}
                </AttendanceTimeText>
              </AttendanceCompleteText>
            )
            : (<Description>
              {getSessionDescriptionMessage({
                isEmptySession,
                isTodaySession,
                isSessionPending,
                isDisplayCameraButton,
              })}
            </Description>
            )}
          {isEmptySession && <SocialLinks />}
          {isDisplayCameraButton && <CameraButton />}
        </Fragment>
      )}
      {meQueryResult.data && (
        <Sidebar
          open={sidebarOpen}
          onClose={onCloseSidebar}
          user={meQueryResult.data}
        />
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

const AttendanceCompleteText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.typo.body1Bold}
  margin-top: ${({ theme }) => theme.rem(16)};
  color: ${({ theme }) => theme.palette.grayScale.white};

  svg {
    margin-right: ${({ theme }) => theme.rem(6)};
  }
`;

const AttendanceTimeText = styled.span`
  margin-left:${({ theme }) => theme.rem(8)};
`;

export { HomePage };
