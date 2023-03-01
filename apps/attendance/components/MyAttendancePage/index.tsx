import { useAttendanceMe, useMemberMe } from '@weekly/api';
import { Icon, styled } from '@weekly/ui';
import { formatMonthDate, useMinimumWaiting } from '@weekly/utils';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import { Loader } from '~/components/Loader';
import { PAGE_URLS } from '~/constants/urls';
import { onInvalidTokenError } from '~/utils/error';

import { AttendanceList } from './AttendanceList';
import { CompletableInfo } from './CompletableInfo';
import { Empty } from './Empty';

const FULL_SESSION_COUNT = 8 as const;

function MyAttendancePage() {
  const router = useRouter();
  const meAttendanceQueryResult = useAttendanceMe({
    onError: onInvalidTokenError,
  });
  const meQueryResult = useMemberMe({ onError: onInvalidTokenError });
  const wait = useMinimumWaiting();

  const { isCompletable = true, score = 0, attendances = [] } = meAttendanceQueryResult.data ?? {};
  const { generation } = meQueryResult.data ?? {};
  const lastSessionDate = attendances[FULL_SESSION_COUNT - 1]?.sessionDate;

  const isLoading = meAttendanceQueryResult.isLoading || meQueryResult.isLoading || wait;
  const isFull = attendances.length === FULL_SESSION_COUNT;
  const isEmpty = attendances.length === 0;

  const onClickBackButton = () => router.push(PAGE_URLS.MAIN);

  return (
    <Container>
      {isLoading
        ? <Loader />
        : (
          <Fragment>
            <HeaderContainer isFull={isFull}>
              <BackButton onClick={onClickBackButton}>
                <Icon name='chevronLeft' />
              </BackButton>
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
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: ${({ isFull, theme }) => theme.rem(isFull ? 24 : 64)};
`;

const BackButton = styled.button`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(50%);
  width: ${({ theme }) => theme.rem(24)};
  height: ${({ theme }) => theme.rem(24)};
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
