import { useMeAttendanceQuery } from '@weekly/api';
import { styled } from '@weekly/ui';
import { Fragment } from 'react';

import { onInvalidTokenError } from '~/utils/error';

import { AttendanceList } from './AttendanceList';
import { CompletableInfo } from './CompletableInfo';
import { Empty } from './Empty';

function MyAttendancePage() {
  const { data } = useMeAttendanceQuery({
    onError: onInvalidTokenError,
  });
  const isCompletable = data?.attendanceData.isCompletable ?? true;
  const score = data?.attendanceData.score ?? 0;
  const attendances = data?.attendanceData.attendances ?? [];
  const isFull = attendances.length === 8;
  const isEmpty = attendances.length === 0;
  return (
    <Container>
      <HeaderContainer isFull={isFull}>
        <Title>내 출석 정보</Title>
        {isFull && (
          <Description>
            22기 내 출석 정보는 03.11까지 확인 가능해요.
          </Description>
        )}
      </HeaderContainer>
      {!isEmpty && (
        <CompletableInfo score={score} isCompletable={isCompletable} />
      )}
      <AttendanceContainer>
        {isEmpty ? <Empty /> : <AttendanceList attendances={attendances} />}
      </AttendanceContainer>
    </Container>
  );
}

const Container = Fragment;

const HeaderContainer = styled.header<{ isFull: boolean }>`
  text-align: center;
  margin-bottom: ${({ isFull, theme }) => theme.rem(isFull ? 24 : 64)};
`;

const Title = styled.h3`
  ${({ theme }) => theme.typo.h3Bold};
  color: ${({ theme }) => theme.palette.grayScale.white};
  margin-top: ${({ theme }) => theme.rem(36)};
`;

const Description = styled.p`
  ${({ theme }) => theme.typo.body2Medium};
  color: ${({ theme }) => theme.palette.grayScale.g50};
  margin-top: ${({ theme }) => theme.rem(24)};
`;

const AttendanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export { MyAttendancePage };
