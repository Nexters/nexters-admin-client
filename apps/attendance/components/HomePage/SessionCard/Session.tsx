import { styled } from '@weekly/ui';
import { Fragment } from 'react';

type Props = {
  date: Date;
  week: number;
  description: string;
};

function Session(props: Props) {
  const { date, week, description } = props;
  return (
    <Container>
      <DateText>{`${date.getMonth() + 1}월 ${date.getDate()}일`}</DateText>
      <WeekText>{`${week}주차 세션`}</WeekText>
      <DescriptionText>{description}</DescriptionText>
    </Container>
  );
}

const Container = Fragment;

const DateText = styled.h3`
  ${({ theme }) => theme.typo.h3Medium}
  color: ${({ theme }) => theme.palette.grayScale.g10};
`;

const WeekText = styled.h1`
  ${({ theme }) => theme.typo.h1Bold}
  color: ${({ theme }) => theme.palette.grayScale.g10};
  margin-top: ${({ theme }) => theme.rem(4)};
`;

const DescriptionText = styled.h3`
  ${({ theme }) => theme.typo.h3Bold}
  color: ${({ theme }) => theme.palette.grayScale.g100};
  border-radius: ${({ theme }) => theme.rem(12)};
  margin-top: ${({ theme }) => theme.rem(32)};
  padding: ${({ theme }) => `${theme.rem(8)} ${theme.rem(16)}`};
  background-color: ${({ theme }) => theme.palette.main.green50};
`;

export { Session };
