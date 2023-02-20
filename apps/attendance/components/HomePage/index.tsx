import { useMeQuery } from '@weekly/api';
import { styled } from '@weekly/ui';
import { useRouter } from 'next/router';
import { useLayoutEffect, useState } from 'react';

import { CameraButton } from './CameraButton';
import { MenuButton } from './MenuButton';
import { SessionCard } from './SessionCard';
import { Sidebar } from './Sidebar';
import { SocialLinks } from './SocialLinks';

function HomePage() {
  const dummy = {
    type: 'session',
    date: new Date(),
    week: 1,
    description: '레크레이션 & 팀 작업 & 뭐 어쩌고 저쩌고 긴 글자',
  };
  const { pathname } = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isLoading, data } = useMeQuery();
  const onClickMenuButton = () => setSidebarOpen(true);
  const onCloseSidebar = () => setSidebarOpen(false);
  useLayoutEffect(() => {
    if (sidebarOpen) {
      onCloseSidebar();
    }
  }, [pathname]);
  return (
    <Container>
      <MenuButton onClick={onClickMenuButton} disabled={isLoading} />
      <SessionCard
        type='session'
        date={dummy.date}
        week={dummy.week}
        description={dummy.description}
      />
      <Description>
        {dummy.type === 'empty'
          ? '넥스터즈의 정보를 빠르게 받아보세요 :)'
          : '스크린의 QR코드를 찍으면 출석체크 할 수 있어요.'}
      </Description>
      {dummy.type === 'empty' ? <SocialLinks /> : <CameraButton />}
      {data && (
        <Sidebar open={sidebarOpen} onClose={onCloseSidebar} user={data} />
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
