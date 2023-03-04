import { Icon, styled } from '@weekly/ui';

function Timer() {
  return (
    <TimerContainer>
      <Icon name='clock' />
      <TimerLabel>
        QR 코드 유효 시간
      </TimerLabel>
      <TimerText>
        01:00
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
