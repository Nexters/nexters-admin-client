import { Session } from '@weekly/api/dto/admin';
import { styled } from '@weekly/ui';

interface SessionItemProps {
  session: Session;
}

function SessionItem({ session }: SessionItemProps) {
  return (
    <Container>
      <Date>{session.sessionTime}</Date>
      <Week>{session.week}주차 세션</Week>
      <Title>{session.title}</Title>
      <Description>{session.description}</Description>
    </Container>
  );
}
const Container = styled.div`
  width: 244px;
  height: 244px;
  border-radius: 14px;
  background-color: ${({ theme }) => theme.palette.grayScale.g50};
`;

const Date = styled.div`
  ${({ theme }) => theme.typo.body1Medium}
  color: ${({ theme }) => theme.palette.grayScale.g95};
`;
const Week = styled.div`
  ${({ theme }) => theme.typo.h2Bold}
  color: ${({ theme }) => theme.palette.grayScale.g95};
`;
const Title = styled.div`
  ${({ theme }) => theme.typo.body1Bold}
  color: ${({ theme }) => theme.palette.grayScale.g100};
`;
const Description = styled.div`
  ${({ theme }) => theme.typo.body2Medium}
  color: ${({ theme }) => theme.palette.grayScale.g60};
`;
export default SessionItem;
