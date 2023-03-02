import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import { AuthGuard } from '~/components/authentication/AuthGuard';
import { Column, Table } from '~/components/tables/Table';

// SAMPLE
const COLUMNS: Column[] = [
  {
    label: '이름',
  },
  {
    label: '직군',
  },
  {
    label: '세부 직군',
  },
  {
    label: '최초 기수',
    align: 'right',
  },
];

const ROWS = [
  {
    name: '김철수',
    position: '프론트엔드',
    detailPosition: '개발자',
    generation: '22기',
  },
  {
    name: '안철수',
    position: '백엔드',
    detailPosition: '개발자',
    generation: '20기',
  },
];

function AttendanceSession() {
  return (
    <Table
      columns={COLUMNS}
      pagination={{
        page: 0,
        rowsPerPage: 5,
        count: 30,
      }}
    >
      {ROWS.map((row) => (
        <Table.Row>
          <Table.Cell item={row.name} />
          <Table.Cell item={row.position} />
          <Table.Cell item={row.detailPosition} />
          <Table.Cell item={row.generation} />
        </Table.Row>
      ))}
    </Table>
  );
}

export default AttendanceSession;

AttendanceSession.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};
