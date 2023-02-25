import { useMeQuery, useSessionQuery } from '@weekly/api';
import { styled } from '@weekly/ui';
import { useMinimumWaiting } from '@weekly/utils';
import { useRouter } from 'next/router';
import { Fragment, useLayoutEffect, useState } from 'react';

import { onInvalidTokenError } from '~/utils/error';

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
  const onClickMenuButton = () => setSidebarOpen(true);
  const onCloseSidebar = () => setSidebarOpen(false);
  useLayoutEffect(() => {
    if (sidebarOpen) {
      onCloseSidebar();
    }
  }, [pathname]);
  return (
    <Container>
      <MenuButton
        onClick={onClickMenuButton}
        disabled={meQueryResult.isLoading}
      />
      {sessionQueryResult.isLoading || isOneSecondLoading ? (
        <Loader />
      ) : (
        <Fragment>
          {!isEmptySession ? (
            <SessionCard {...sessionQueryResult.data} />
          ) : (
            <EmptyCard />
          )}
          <Description>
            {isEmptySession
              ? '넥스터즈의 정보를 빠르게 받아보세요 :)'
              : '스크린의 QR코드를 찍으면 출석체크 할 수 있어요.'}
          </Description>
          {isEmptySession ? <SocialLinks /> : <CameraButton />}
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

export { HomePage };
