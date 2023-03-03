import { useAttendanceSession } from '@weekly/api';
import { Button, Search, styled } from '@weekly/ui';
import { formatYYMMDD } from '@weekly/utils';
import { useRouter } from 'next/router';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import AttendancePopup from '~/components/attendance/AttendancePopup';
import AttendanceStatus from '~/components/attendance/AttendanceStatus';
import { AuthGuard } from '~/components/authentication/AuthGuard';
import { Column, Table } from '~/components/tables/Table';

const attendanceColumnData = [
  '이름',
  '직군',
  '세부 직군',
  '최초 기수',
  '변동',
  '점수',
  '출결',
  '기타 점수',
  '비고',
  ' ',
];

const centerAlignColumns = ['변동', '점수', '출결', '기타 점수'];
const COLUMNS: Column[] = attendanceColumnData.map((column) => {
  return {
    label: column,
    align: centerAlignColumns.find(
      (centerAligncolumn) => centerAligncolumn === column,
    )
      ? 'center'
      : 'left',
  };
});

function AttendanceSession() {
  const router = useRouter();
  const { sessionId } = router.query;
  const { data: attendances, isSuccess } = useAttendanceSession(
    Number(sessionId),
  );

  return (
    <Container>
      <AttendanceSessionTitle>
        <p>{attendances?.week}주차 세션</p>
        {isSuccess && <p>{formatYYMMDD(attendances?.sessionDate)}</p>}
      </AttendanceSessionTitle>

      <AttendanceSessionHeader>
        <Search width={335} />
        <AttendanceSessionRemote>
          <Indicator>
            <p>출석</p>
            <p>{attendances?.attended}명</p>
            <p>지각</p>
            <p>{attendances?.tardy}명</p>
            <p>결석</p>
            <p>{attendances?.absence}명</p>
          </Indicator>
          <Button size='small' varient='secondary'>
            지각 시작
          </Button>
          <Button size='small'>출석 시작</Button>
        </AttendanceSessionRemote>
      </AttendanceSessionHeader>
      <AttendanceTable>
        <Table
          columns={COLUMNS}
          pagination={{
            page: 0,
            rowsPerPage: 5,
            count: 30,
          }}
          minWidth={800}
        >
          {attendances?.data.map((row, idx) => (
            <Table.Row>
              <Table.Cell item={row.name} />
              <Table.Cell item={row.position} />
              <Table.Cell item={row.subPosition} />
              <Table.Cell item={row.initialGeneration} />
              <Table.Cell
                align='center'
                item={
                  row.scoreChanged === 0 ? (
                    '-'
                  ) : (
                    <ScoreChanged plus={row.scoreChanged > 0}>
                      {row.scoreChanged}
                    </ScoreChanged>
                  )
                }
              />
              <Table.Cell item={row.score} align='center' />
              <Table.Cell
                align='center'
                item={
                  row.attendanceStatus === '대기' ? (
                    '-'
                  ) : (
                    <AttendanceStatus status={row.attendanceStatus} />
                  )
                }
              />
              <Table.Cell
                item={<ExtraScoreNote>{row.extraScoreNote}</ExtraScoreNote>}
              />
              <Table.Cell item={row.note} />
              <Table.Cell
                align='right'
                item={
                  <AttendancePopup
                    attendanceMember={row}
                    isLast={idx > attendances.data.length - 3}
                  />
                }
              />
            </Table.Row>
          ))}
        </Table>
      </AttendanceTable>
    </Container>
  );
}

const Container = styled.div``;
const AttendanceSessionTitle = styled.div`
  display: flex;
  position: fixed;
  top: 54px;
  left: 277px;
  p:first-of-type {
    ${({ theme }) => theme.typo.body1Bold}
  }
  p:last-of-type {
    margin-left: 8px;
    ${({ theme }) => theme.typo.body1Regular}
  }
  z-index: 10;
`;
const AttendanceSessionHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.rem(20)};
  display: flex;

  justify-content: space-between;
`;
const AttendanceSessionRemote = styled.div`
  display: flex;
  flex-shrink: 0;

  align-items: center;
  margin-left: 12px;

  button:last-of-type {
    margin-left: ${({ theme }) => theme.rem(12)};
  }
`;
const Indicator = styled.div`
  display: flex;
  flex-shrink: 0;
  p:nth-of-type(2n-1) {
    ${({ theme }) => theme.typo.body2Regular}
    margin-right:${({ theme }) => theme.rem(8)}
  }
  p:nth-of-type(2n) {
    ${({ theme }) => theme.typo.body2Bold}
    position: relative;
    margin-right: ${({ theme }) => theme.rem(24)};
  }
  //최대한 flexgap 안쓰려고 노력,,,,
  p:nth-of-type(2n):not(:last-of-type):after {
    content: '';
    position: absolute;
    display: inline-block;
    margin-left: 12px;
    top: 2px;
    width: 1px;
    height: 17px;
    background-color: ${({ theme }) => theme.palette.grayScale.g30};
  }
`;
const ScoreChanged = styled.div<{ plus: boolean }>`
  color: ${({ theme, plus }) =>
    plus ? `${theme.palette.main.blue100}` : `${theme.palette.main.red100}`};
`;
const ExtraScoreNote = styled.div`
  color: ${({ theme }) => theme.palette.main.blue100};
`;
const AttendanceTable = styled.div``;

export default AttendanceSession;

AttendanceSession.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
