import { useAttendanceSession } from '@weekly/api';
import { css, Icon, Popup, PopupOptions, styled  } from '@weekly/ui';
import { useRouter } from 'next/router';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
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
  '',
];
const COLUMNS: Column[] = attendanceColumnData.map((column) => {
  return { label: column };
});

const attendanceOption: PopupOptions[] = [
  {
    title: '출결 설정',
    onClick: () => {
      console.log('TODO');
    },
  },
  {
    title: '기타 점수',
    onClick: () => {
      console.log('TODO');
    },
  },
];

function AttendanceSession() {
  const router = useRouter();
  const { sessionId } = router.query;
  const { data: attendances, isSuccess } = useAttendanceSession(
    Number(sessionId),
  );
  return (
    <Table
      columns={COLUMNS}
      pagination={{
        page: 0,
        rowsPerPage: 5,
        count: 30,
      }}
      minWidth={800}
    >
      {attendances?.data.map((row) => (
        <Table.Row>
          <Table.Cell item={row.name} />
          <Table.Cell item={row.position} />
          <Table.Cell item={row.subPosition} />
          <Table.Cell item={row.initialGeneration} />
          <Table.Cell item={row.scoreChanged} />
          <Table.Cell item={row.score} />
          <Table.Cell
            item={row.attendanceStatus === '대기' ? '-' : row.attendanceStatus}
          />
          <Table.Cell item={row.extraScoreNote} />
          <Table.Cell item={row.note} />
          <Table.Cell
            item={
              <Popup
                options={attendanceOption}
                sx={css`
                  margin-right: 10px;
                `}
              >
                <ThreeDotMenu>
                  <Icon name='threeDot' />
                </ThreeDotMenu>
              </Popup>
            }
          />
        </Table.Row>
      ))}
    </Table>
  );
}

const ThreeDotMenu = styled.button`
  cursor: pointer;
`;

export default AttendanceSession;

AttendanceSession.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
