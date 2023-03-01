import { AttendanceResponse } from '@weekly/api/lib/types/attendance';
import { Chip, Icon, styled } from '@weekly/ui';
import {
  formatHHMMSS,
  formatYYMMDD,
  getAttendanceStatusLabel,
} from '@weekly/utils';

type Props = AttendanceResponse;

function AttendacneListItem(props: Props) {
  const { attendanceStatus, title, attendanceTime, sessionDate, penaltyScore } =
    props;
  return (
    <Container>
      <SessionInfoContainer>
        <Title>{title}</Title>
        {sessionDate && <SessionDate>{formatYYMMDD(sessionDate)}</SessionDate>}
      </SessionInfoContainer>
      <StatusContainer>
        <StatusDetail>
          <Chip>{getAttendanceStatusLabel(attendanceStatus)}</Chip>
          {attendanceTime && (
            <AttendanceTime>{formatHHMMSS(attendanceTime)}</AttendanceTime>
          )}
        </StatusDetail>
        <StatusDetail>
          {penaltyScore === 0 ? (
            <Icon name='thumbsUp' />
          ) : (
            <PenaltyScore>-{penaltyScore}점</PenaltyScore>
          )}
        </StatusDetail>
      </StatusContainer>
    </Container>
  );
}

const Container = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.grayScale.g95};
  padding: ${({ theme }) => theme.rem(20)} ${({ theme }) => theme.rem(16)};
  border-radius: ${({ theme }) => theme.rem(16)};
  margin-bottom: ${({ theme }) => theme.rem(16)};
`;

const SessionInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.palette.grayScale.g10};
  margin-bottom: ${({ theme }) => theme.rem(16)};
`;

const Title = styled.h3`
  ${({ theme }) => theme.typo.h3Bold};
  margin-right: ${({ theme }) => theme.rem(8)};
`;

const SessionDate = styled.span`
  ${({ theme }) => theme.typo.body1Medium};
`;

const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatusDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AttendanceTime = styled.span`
  ${({ theme }) => theme.typo.body1Medium};
  color: ${({ theme }) => theme.palette.grayScale.g10};
  margin-left: ${({ theme }) => theme.rem(8)};
`;

const PenaltyScore = styled.span`
  ${({ theme }) => theme.typo.body1Bold};
  color: ${({ theme }) => theme.palette.main.red100};
`;

export { AttendacneListItem };
