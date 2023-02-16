import { Icon, styled } from '@weekly/ui';
import { Fragment } from 'react';

import { SessionCard } from './SessionCard';

function HomePage() {
  const isEmpty = true;
  return (
    <Container>
      <MenuButton>
        <Icon name='user' />
      </MenuButton>
      <SessionCard
        type='session'
        date={new Date()}
        week={1}
        description='OT & 팀빌딩'
      />
      <Description>
        {isEmpty
          ? '넥스터즈의 정보를 빠르게 받아보세요 :)'
          : '스크린의 QR코드를 찍으면 출석체크 할 수 있어요.'}
      </Description>
      {isEmpty ? (
        <SubButtonContainer>
          <Fragment>
            <SubButton>
              <Icon name='link' />
            </SubButton>
            <SubButton>
              <Icon name='facebook' />
            </SubButton>
            <SubButton>
              <Icon name='instagram' />
            </SubButton>
          </Fragment>
        </SubButtonContainer>
      ) : (
        <CameraSubButtonContainer>
          <SubButton>
            <Icon name='camera' />
          </SubButton>
        </CameraSubButtonContainer>
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

const SubButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.rem(12)};
`;

const CameraSubButtonContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: ${({ theme }) => theme.rem(32)};
`;

const SubButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.rem(40)};
  height: ${({ theme }) => theme.rem(40)};
  margin: ${({ theme }) => `0 ${theme.rem(8)}`};
  border-radius: ${({ theme }) => theme.rem(8)};
  background-color: ${({ theme }) => theme.palette.grayScale.g80};
`;

export { HomePage };
