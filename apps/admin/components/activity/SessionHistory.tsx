import { styled } from '@weekly/ui';

import AttendanceStatus from '../attendance/AttendanceStatus';

function SessionHistory() {
  return (
    <Container>
      <Header>
        <h3>8주차 세션</h3>
        <p>2023.02.11</p>
      </Header>
      <Content>
        <AttendanceStatus status='통보결석' />
        <PenaltyScore>-10점</PenaltyScore>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  padding: ${({ theme }) =>
    `${theme.rem(20)} ${theme.rem(24)} ${theme.rem(16)} ${theme.rem(16)}`};
  background-color: ${({ theme }) => theme.palette.grayScale.g20};
  border-radius: ${({ theme }) => theme.rem(16)};
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  h3 {
    ${({ theme }) => theme.typo.h3Bold}
    color : ${({ theme }) => theme.palette.grayScale.g100};
  }
  p {
    ${({ theme }) => theme.typo.body1Medium}
    color : ${({ theme }) => theme.palette.grayScale.g50};
    margin-left: ${({ theme }) => theme.rem(8)};
  }
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.rem(16)};
`;
const PenaltyScore = styled.div`
  color: ${({ theme }) => theme.palette.main.red100};
  ${({ theme }) => theme.typo.body1Bold}
`;
export default SessionHistory;
