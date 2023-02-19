import { styled } from '@weekly/ui';
import type { ComponentProps } from 'react';
import { Fragment } from 'react';

import { AttendanceList } from './AttendanceList';
import { CompletableInfo } from './CompletableInfo';
import { Empty } from './Empty';

function MyAttendancePage() {
  const score = 100;
  const isCompletable = true;
  const attendances: ComponentProps<typeof AttendanceList>['attendances'] = [
    {
      attendanceStatus: 'ATTENDED',
      title: '1주차 세션',
      week: 1,
      attendanceTime: Date.now().toString(),
      sessionDate: Date.now().toString(),
      penaltyScore: 0,
    },
    {
      attendanceStatus: 'TARDY',
      title: '2주차 세션',
      week: 2,
      attendanceTime: Date.now().toString(),
      sessionDate: Date.now().toString(),
      penaltyScore: 5,
    },
    {
      attendanceStatus: 'UNAUTHORIZED_ABSENCE',
      title: '3주차 세션',
      week: 3,
      sessionDate: Date.now().toString(),
      penaltyScore: 15,
    },
    {
      attendanceStatus: 'AUTHORIZED_ABSENCE',
      title: '4주차 세션',
      week: 4,
      sessionDate: Date.now().toString(),
      penaltyScore: 10,
    },
    {
      attendanceStatus: 'UNAUTHORIZED_ABSENCE',
      title: '5주차 세션',
      week: 5,
      sessionDate: Date.now().toString(),
      penaltyScore: 15,
    },
    {
      attendanceStatus: 'AUTHORIZED_ABSENCE',
      title: '6주차 세션',
      week: 6,
      sessionDate: Date.now().toString(),
      penaltyScore: 10,
    },
    {
      attendanceStatus: 'UNAUTHORIZED_ABSENCE',
      title: '7주차 세션',
      week: 7,
      sessionDate: Date.now().toString(),
      penaltyScore: 15,
    },
    // {
    //   attendanceStatus: 'UNAUTHORIZED_ABSENCE',
    //   title: '8주차 세션',
    //   week: 8,
    //   sessionDate: Date.now().toString(),
    //   penaltyScore: 15,
    // },
  ];
  const attendanceData = {
    score,
    isCompletable,
    attendances,
  };
  const isEmpty = attendanceData.attendances.length === 0;
  const isFull = attendanceData.attendances.length === 8;
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
        {isEmpty ? (
          <Empty />
        ) : (
          <AttendanceList attendances={attendanceData.attendances} />
        )}
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
