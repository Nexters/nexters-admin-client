import { styled } from '@weekly/ui';
import { Fragment } from 'react';

import { Empty } from './Empty';

function MyAttendancePage() {
  const isEmpty = true;
  return (
    <Container>
      <HeaderContainer>
        <Title>내 출석 정보</Title>
        {!isEmpty && (
          <Description>
            22기 내 출석 정보는 03.11까지 확인 가능해요.
          </Description>
        )}
      </HeaderContainer>
      <AttendanceContainer>
        <Empty />
      </AttendanceContainer>
    </Container>
  );
}

const Container = Fragment;

const HeaderContainer = styled.header`
  text-align: center;
`;

const Title = styled.h3`
  ${({ theme }) => theme.typo.h3Bold};
  color: ${({ theme }) => theme.palette.grayScale.white};
  margin-top: ${({ theme }) => theme.rem(36)};
`;

const Description = styled.p`
  ${({ theme }) => theme.typo.body2Medium};
  color: ${({ theme }) => theme.palette.grayScale.g50};
  margin-top: ${({ theme }) => theme.rem(22)};
`;

const AttendanceContainer = styled.div`
  display: flex;
  height: 100vh;
  margin-top: ${({ theme }) => theme.rem(22)};
`;

export { MyAttendancePage };
