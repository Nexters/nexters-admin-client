import { useAttendanceQr, useDeleteAttendanceQr } from '@weekly/api';
import { Button, styled } from '@weekly/ui';
import { formatKoreanMonthDate } from '@weekly/utils';
import dynamic from 'next/dynamic';

import { Timer } from '~/components/Timer';

const QRCode = dynamic(() => import('../components/QRCode'), {
  ssr: false,
});

function Home() {
  const { data, refetch } = useAttendanceQr();
  const { mutate } = useDeleteAttendanceQr();
  const { sessionDate, week, qrCode, expirationTime } = data ?? {};
  // TODO: URL 교체
  const baseURL = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/attendance/qr'
    : 'https://chulchul.site/attendance/qr';
  const queryString = qrCode ? `?nonce=${qrCode}` : '';
  const attendanceURL = baseURL + queryString;

  const onClickDeleteAttendanceButton: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    mutate();
  };
  const refetchAttendanceQr = () => refetch();

  return (
    <Container>
      {sessionDate && (
        <DateText>
          {formatKoreanMonthDate(sessionDate)}
        </DateText>
      )}
      {week && (
        <SessionTitle>
          {week}주차 세션
        </SessionTitle>
      )}
      <QRCode url={attendanceURL} />
      <ButtonContainer>
        <Button fullWidth onClick={onClickDeleteAttendanceButton}>
          출석 종료
        </Button>
      </ButtonContainer>
      {expirationTime && (
        <Timer
          expirationTime={expirationTime}
          refetchAttendanceQr={refetchAttendanceQr} />
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: ${({ theme }) => theme.rem(320)};
  max-width: ${({ theme }) => theme.rem(743)};
  padding: 0 ${({ theme }) => theme.rem(20)};
`;

const DateText = styled.span`
  ${({ theme }) => theme.typo.h3Medium};
  color: ${({ theme }) => theme.palette.grayScale.g30};
  margin-bottom: ${({ theme }) => theme.rem(4)};
`;

const SessionTitle = styled.h1`
  ${({ theme }) => theme.typo.h1Bold};
  color: ${({ theme }) => theme.palette.grayScale.white};
  margin-bottom: ${({ theme }) => theme.rem(24)};
`;

const ButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.rem(16)};
  width: ${({ theme }) => theme.rem(335)};
`;

export default Home;
