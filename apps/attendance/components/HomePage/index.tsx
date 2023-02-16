import { Icon, styled } from '@weekly/ui';

import { CameraButton } from './CameraButton';
import { SessionCard } from './SessionCard';
import { SocialLinks } from './SocialLinks';

function HomePage() {
  const data = {
    type: 'session',
    date: new Date(),
    week: 1,
    description: 'OT & 팀빌딩',
  };
  return (
    <Container>
      <MenuButton>
        <Icon name='user' />
      </MenuButton>
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

const MenuButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.rem(40)};
  right: ${({ theme }) => theme.rem(-4)};
  width: ${({ theme }) => theme.rem(24)};
  height: ${({ theme }) => theme.rem(24)};
`;

const Description = styled.p`
  ${({ theme }) => theme.typo.body2Medium}
  margin-top: ${({ theme }) => theme.rem(20)};
  color: ${({ theme }) => theme.palette.grayScale.white};
`;

export { HomePage };
