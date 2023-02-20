import { useMeQuery } from '@weekly/api';
import { styled } from '@weekly/ui';

import { useSetUserState } from '~/atoms/user';

import { CameraButton } from './CameraButton';
import { MenuButton } from './MenuButton';
import { SessionCard } from './SessionCard';
import { Sidebar } from './Sidebar';
import { SocialLinks } from './SocialLinks';

function HomePage() {
  const data = {
    type: 'session',
    date: new Date(),
    week: 1,
    description: '레크레이션 & 팀 작업 & 뭐 어쩌고 저쩌고 긴 글자',
  };
  const setUser = useSetUserState();
  useMeQuery({ onSuccess: setUser });
  return (
    <Container>
      <MenuButton />
      <SessionCard
        type='session'
        date={data.date}
        week={data.week}
        description={data.description}
      />
      <Description>
        {data.type === 'empty'
          ? '넥스터즈의 정보를 빠르게 받아보세요 :)'
          : '스크린의 QR코드를 찍으면 출석체크 할 수 있어요.'}
      </Description>
      {data.type === 'empty' ? <SocialLinks /> : <CameraButton />}
      <Sidebar />
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
