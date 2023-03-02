import { useCreateGeneration, useGeneration } from '@weekly/api';
import { Button, openConfirmSnackBar, styled } from '@weekly/ui';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import { AuthGuard } from '~/components/authentication/AuthGuard';
import GenerationStatus from '~/components/session/GenerationStatus';
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
  const { mutate: createGenerationMutate } = useCreateGeneration();

  const handleCreateGeneration = () => {
    const newGeneration = generations?.data
      ? generations.data[0].generation + 1
      : 1;
    createGenerationMutate({
      generation: newGeneration,
    });
    openConfirmSnackBar(`${newGeneration}기가 추가되었어요`);
  };

  return (
    <Container>
      <CreateGenerationButton size='small' onClick={handleCreateGeneration}>
        기수 추가
      </CreateGenerationButton>
      {generations && (
        <Table columns={COLUMNS}>
          {generations.data.map((generation) => (
            <Table.Row key={generation.generation}>
              <Table.Cell item={`${generation.generation}기`} />
              <Table.Cell
                item={<GenerationStatus generation={generation} />}
                align='right'
              />
            </Table.Row>
          ))}
        </Table>
      )}
    </Container>
  );
}

const Container = styled.div``;
const CreateGenerationButton = styled(Button)`
  display: block;
  margin-left: auto;
`;

SessionHome.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};

export default SessionHome;
