import { Session } from '@weekly/api/dto/admin';
import { Icon, styled } from '@weekly/ui';
import { formatKRmmdd } from '@weekly/utils';
import { ComponentProps } from 'react';

interface SessionItemProps extends ComponentProps<'button'> {
  session: Session;
  isManage?: boolean;
}

function SessionItem({ session, isManage = false, onClick }: SessionItemProps) {
  return (
    <Container onClick={onClick}>
      {isManage && <Icon name='edit' />}
      <Date>{formatKRmmdd(session.sessionTime!)}</Date>
      <Week>{session.week}주차 세션</Week>
      <Title>{session.title}</Title>
      <Description>{session.description}</Description>
    </Container>
  );
}
const Container = styled.button`
  width: ${({ theme }) => theme.rem(244)};
  height: ${({ theme }) => theme.rem(244)};
  border-radius: ${({ theme }) => theme.rem(14)};
  background-color: ${({ theme }) => theme.palette.grayScale.g20};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.rem(20)};
  gap: ${({ theme }) => theme.rem(10)};
`;

const Date = styled.div`
  ${({ theme }) => theme.typo.body1Medium}
  color: ${({ theme }) => theme.palette.grayScale.g95};
  margin-top: ${({ theme }) => theme.rem(24)};
`;
const Week = styled.div`
  ${({ theme }) => theme.typo.h2Bold}
  color: ${({ theme }) => theme.palette.grayScale.g95};
`;
const Title = styled.div`
  ${({ theme }) => theme.typo.body1Bold}
  color: ${({ theme }) => theme.palette.grayScale.g100};

  padding: ${({ theme }) => `${theme.rem(4)} ${theme.rem(12)}`};
  background-color: ${({ theme }) => theme.palette.main.green100};
  border-radius: ${({ theme }) => theme.rem(8)};

  max-width: 204px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Description = styled.div`
  ${({ theme }) => theme.typo.body2Medium}
  color: ${({ theme }) => theme.palette.grayScale.g60};
`;
export default SessionItem;
