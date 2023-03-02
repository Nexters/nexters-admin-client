import { useGeneration } from '@weekly/api';
import { styled } from '@weekly/ui';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import { Column, Table } from '~/components/tables/Table';

const COLUMNS: Column[] = [
  {
    label: '기수',
  },
  {
    label: '',
    align: 'right',
  },
];
function SessionHome() {
  const { data: generations } = useGeneration();
  return (
    <Container>
      {generations && (
        <Table columns={COLUMNS}>
          {generations.data.map((generation) => (
            <Table.Row>
              <Table.Cell item={generation.generation} />
              <Table.Cell item={generation.status} align='right' />
            </Table.Row>
          ))}
        </Table>
      )}
    </Container>
  );
}

const Container = styled.div``;

SessionHome.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default SessionHome;
