import { styled } from '@weekly/ui';
import { formatKoreanMonthDate, getDecimalDay, isAfter } from '@weekly/utils';

type Props = {
  sessionTime: string;
  week: number;
  title: string;
};

function Session(props: Props) {
  const { sessionTime, week, title } = props;
  return (
    <Container>
      <DateText>{formatKoreanMonthDate(sessionTime)}</DateText>
      <WeekText>{week}주차 세션</WeekText>
      <TitleText>{title}</TitleText>
      {isAfter(sessionTime) && (
        <DecimalDayText>D - {getDecimalDay(sessionTime)}</DecimalDayText>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${({ theme }) => theme.rem(335)};
  height: ${({ theme }) => theme.rem(350)};
  border-radius: ${({ theme }) => theme.rem(24)};
  padding: ${({ theme }) => theme.rem(22)};
  background-color: ${({ theme }) => theme.palette.grayScale.g90};
`;

const DateText = styled.h3`
  ${({ theme }) => theme.typo.h3Medium}
  color: ${({ theme }) => theme.palette.grayScale.g10};
`;

const WeekText = styled.h1`
  ${({ theme }) => theme.typo.h1Bold}
  color: ${({ theme }) => theme.palette.grayScale.g10};
  margin-top: ${({ theme }) => theme.rem(4)};
`;

const TitleText = styled.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  ${({ theme }) => theme.typo.h3Bold}
  color: ${({ theme }) => theme.palette.grayScale.g100};
  border-radius: ${({ theme }) => theme.rem(12)};
  margin-top: ${({ theme }) => theme.rem(32)};
  padding: ${({ theme }) => `${theme.rem(8)} ${theme.rem(16)}`};
  background-color: ${({ theme }) => theme.palette.main.green50};
`;

const DecimalDayText = styled.h3`
  position: absolute;
  bottom: ${({ theme }) => theme.rem(12)};
  left: 50%;
  transform: translateX(-50%);
  ${({ theme }) => theme.typo.h3Bold}
  color: ${({ theme }) => theme.palette.grayScale.g60};
`;

export { Session };
