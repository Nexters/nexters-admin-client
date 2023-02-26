import { useMeAttendanceQuery, useMeQuery } from '@weekly/api';
import { styled } from '@weekly/ui';
import { formatMonthDate, useMinimumWaiting } from '@weekly/utils';
import { Fragment } from 'react';

import { Loader } from '~/components/Loader';
import { onInvalidTokenError } from '~/utils/error';

import { AttendanceList } from './AttendanceList';
import { CompletableInfo } from './CompletableInfo';
import { Empty } from './Empty';

const FULL_SESSION_COUNT = 8 as const;

function MyAttendancePage() {
  const meAttendanceQueryResult = useMeAttendanceQuery({
    onError: onInvalidTokenError,
  });
  const meQueryResult = useMeQuery({ onError: onInvalidTokenError });
  const wait = useMinimumWaiting();
  const generation = meQueryResult.data?.generation;
  const isLoading = meAttendanceQueryResult.isLoading || meQueryResult.isLoading || wait;
  const isCompletable = meAttendanceQueryResult.data?.attendanceData.isCompletable ?? true;
  const score = meAttendanceQueryResult.data?.attendanceData.score ?? 0;
  const attendances = meAttendanceQueryResult.data?.attendanceData.attendances ?? [];
  const isFull = attendances.length === FULL_SESSION_COUNT;
  const isEmpty = attendances.length === 0;
  const lastSessionDate = attendances[FULL_SESSION_COUNT - 1]?.sessionDate;
  return (
    <Container>
      {isLoading
        ? <Loader />
        : (
          <Fragment>
            <HeaderContainer isFull={isFull}>
              <Title>내 출석 정보</Title>
              {isFull && generation && lastSessionDate && (
                <Description>
                  {`${generation}기`} 내 출석 정보는 {formatMonthDate(lastSessionDate)}까지 확인 가능해요.
                </Description>
              )}
            </HeaderContainer>
            {!isEmpty && (
              <CompletableInfo score={score} isCompletable={isCompletable} />
            )}
            <AttendanceContainer>
              {isEmpty ? <Empty /> : <AttendanceList attendances={attendances} />}
            </AttendanceContainer>
          </Fragment>
        )}
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
