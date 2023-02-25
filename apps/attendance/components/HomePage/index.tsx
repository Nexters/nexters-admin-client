import { useMeQuery, useSessionQuery } from '@weekly/api';
import { styled } from '@weekly/ui';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';

import { onInvalidTokenError } from '~/utils/error';

import { CameraButton } from './CameraButton';
import { EmptyCard } from './EmptyCard';
import { MenuButton } from './MenuButton';
import { SessionCard } from './SessionCard';
import { Sidebar } from './Sidebar';
import { SocialLinks } from './SocialLinks';

function HomePage() {
  const { pathname } = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sessionQueryResult = useSessionQuery();
  const meQueryResult = useMeQuery({
    onError: onInvalidTokenError,
  });
  const onClickMenuButton = () => setSidebarOpen(true);
  const onCloseSidebar = () => setSidebarOpen(false);
  useLayoutEffect(() => {
    if (sidebarOpen) {
      onCloseSidebar();
    }
  }, [pathname]);
  console.log(sessionQueryResult.data);
  return (
    <Container>
      <MenuButton
        onClick={onClickMenuButton}
        disabled={meQueryResult.isLoading}
      />
      {sessionQueryResult.data ? (
        <SessionCard
          title={sessionQueryResult.data.title}
          description={sessionQueryResult.data.description}
          sessionDate={sessionQueryResult.data.sessionDate}
        />
      ) : (
        <EmptyCard />
      )}
      <Description>
        {true
          ? '넥스터즈의 정보를 빠르게 받아보세요 :)'
          : '스크린의 QR코드를 찍으면 출석체크 할 수 있어요.'}
      </Description>
      {true ? <SocialLinks /> : <CameraButton />}
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
