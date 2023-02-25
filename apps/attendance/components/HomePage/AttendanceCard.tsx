import type { SessionHomeResponse } from '@weekly/api/dto/attendance';
import { styled } from '@weekly/ui';
import { formatKoreanMonthDate } from '@weekly/utils';

import { ChulChul } from './ChulChul';

type Props = SessionHomeResponse;

function AttendanceCard(props: Props) {
  const { week, sessionDate, title, description = '오늘은 설레는 넥스터즈 세션이에요:)' } = props;
  return (
    <Container>
      <ChulChul week={week} />
      <TitleText>{title}</TitleText>
      <DateText>{formatKoreanMonthDate(sessionDate)}</DateText>
      <SessionWeekText>
        {week}주차 세션
      </SessionWeekText>
      <DescriptionText>{description}</DescriptionText>
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
  height: ${({ theme }) => theme.rem(440)};
  border-radius: ${({ theme }) => theme.rem(24)};
  padding: ${({ theme }) => theme.rem(22)};
  background-color: ${({ theme }) => theme.palette.grayScale.g90};
`;

const DateText = styled.h3`
  ${({ theme }) => theme.typo.h3Medium}
  color: ${({ theme }) => theme.palette.grayScale.g10};
  margin-bottom: ${({ theme }) => theme.rem(4)};
`;

const TitleText = styled.h1`
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
  ${({ theme }) => theme.typo.h3Bold}
  color: ${({ theme }) => theme.palette.grayScale.g100};
  border-radius: ${({ theme }) => theme.rem(12)};
  margin-bottom: ${({ theme }) => theme.rem(16)};
  padding: ${({ theme }) => `${theme.rem(8)} ${theme.rem(16)}`};
  background-color: ${({ theme }) => theme.palette.main.green50};
`;

const SessionWeekText = styled.h1`
  ${({ theme }) => theme.typo.h1Bold}
  color: ${({ theme }) => theme.palette.grayScale.g10};
`;

const DescriptionText = styled.h3`
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${({ theme }) => theme.rem(335)};
  ${({ theme }) => theme.typo.h3Bold}
  height: ${({ theme }) => theme.rem(96)};
  color: ${({ theme }) => theme.palette.grayScale.g10};
  border-radius: 0 0 ${({ theme }) => theme.rem(24)} ${({ theme }) => theme.rem(24)};
  margin-top: ${({ theme }) => theme.rem(48)};
  padding: ${({ theme }) => `${theme.rem(32)} ${theme.rem(40)}`};
  background-color: ${({ theme }) => theme.palette.grayScale.g95};
`;

export { AttendanceCard };
