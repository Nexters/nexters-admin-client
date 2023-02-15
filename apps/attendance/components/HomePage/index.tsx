import { Icon, styled } from '@weekly/ui';
import Image from 'next/image';
import { Fragment } from 'react';

import empty from '~/images/home/empty.png';

function HomePage() {
  const isEmpty = true;
  return (
    <Container>
      <MenuButton>
        <Icon name='user' />
      </MenuButton>
      <SessionInfo>
        <SessionInfoText>활동 시작을 기다려 볼까요?</SessionInfoText>
        <Image
          src={empty}
          width={168}
          height={196}
          placeholder='blur'
          alt='활동 시작을 기다려 볼까요?'
        />
      </SessionInfo>
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

const SessionInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${({ theme }) => theme.rem(335)};
  height: ${({ theme }) => theme.rem(360)};
  border-radius: ${({ theme }) => theme.rem(24)};
  background-color: ${({ theme }) => theme.palette.grayScale.g90};
`;

const SessionInfoText = styled.h2`
  ${({ theme }) => theme.typo.h2Bold}
  margin-bottom: ${({ theme }) => theme.rem(36)};
  color: ${({ theme }) => theme.palette.grayScale.g10};
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
