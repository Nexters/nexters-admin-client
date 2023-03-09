import { Icon, styled } from '@weekly/ui';
import { addZero } from '@weekly/utils';
import { useEffect, useRef } from 'react';

import { useTimer } from '~/hooks/useTimer';

type Props = {
  expirationTime: string;
  refetchAttendanceQr: VoidFunction;
}

function Timer(props: Props) {
  const { expirationTime, refetchAttendanceQr } = props;
  const startTime = useRef(new Date());
  const { timer, reset } = useTimer();
  const expirationTimeDate = new Date(expirationTime);
  const diff = expirationTimeDate.getTime() - startTime.current.getTime() - timer;
  const minutes = Math.max(Math.floor(diff / 1000 / 60), 0);
  const seconds = Math.max(Math.floor(diff / 1000 % 60), 0);
  useEffect(() => {
    if (minutes === 0 && seconds <= 0) {
      startTime.current = new Date();
      refetchAttendanceQr();
      reset();
    }
  }, [minutes, seconds]);
  return (
    <TimerContainer>
      <Icon name='clock' />
      <TimerLabel>
        QR 코드 유효 시간
      </TimerLabel>
      <TimerText>
        {addZero(minutes)}:{addZero(seconds)}
      </TimerText>
    </TimerContainer>
  );
}

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.rem(16)};
`;

const TimerLabel = styled.span`
  ${({ theme }) => theme.typo.body2Medium};
  color: ${({ theme }) => theme.palette.grayScale.g40};
  margin-left: ${({ theme }) => theme.rem(4)};
  margin-right: ${({ theme }) => theme.rem(8)};
`;

const TimerText = styled.span`
  ${({ theme }) => theme.typo.body2Bold};
  color: ${({ theme }) => theme.palette.grayScale.white};
`;

export { Timer };
