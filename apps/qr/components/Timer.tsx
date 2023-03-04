import { Icon, styled } from '@weekly/ui';
import { useRef } from 'react';

import { useTimer } from '~/hooks/useTimer';

type Props = {
  expirationTime: string;
}

function Timer(props: Props) {
  const { expirationTime } = props;
  const startTime = useRef(new Date());
  const timer = useTimer();
  const expirationTimeDate = new Date(expirationTime);
  const diff = expirationTimeDate.getTime() - startTime.current.getTime() - timer;
  const minutes = ('00' + Math.floor(diff / 1000 / 60)).slice(-2);
  const seconds = ('00' + Math.floor(diff / 1000 % 60)).slice(-2);
  return (
    <TimerContainer>
      <Icon name='clock' />
      <TimerLabel>
        QR 코드 유효 시간
      </TimerLabel>
      <TimerText>
        {minutes}:{seconds}
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
