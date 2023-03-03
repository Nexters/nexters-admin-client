import { useCreateGeneration, useGeneration } from '@weekly/api';
import { Button, openConfirmSnackBar, styled } from '@weekly/ui';
import { useRouter } from 'next/router';

import { DashboardLayout } from '~/components//dashboard/DashboardLayout';
import { AuthGuard } from '~/components/authentication/AuthGuard';
import Empty from '~/components/dashboard/\bEmpty';
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
  const { push } = useRouter();
  const { data: generations, isSuccess } = useGeneration();
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

      {generations?.data.length ? (
        <Table columns={COLUMNS}>
          {generations.data.map((generation) => (
            <Table.Row key={generation.generation}>
              <Table.Cell
                item={
                  <SessionGenerationLink
                    onClick={() => {
                      push(`/session/${generation.generation}`);
                    }}
                  >
                    {generation.generation}기
                  </SessionGenerationLink>
                }
              />
              <Table.Cell
                item={<GenerationStatus generation={generation} />}
                align='right'
                width={100}
              />
            </Table.Row>
          ))}
        </Table>
      ) : (
        <Empty
          message={'기수 추가 버튼을 눌러\n새로운 기수를 추가해 주세요.'}
        />
      )}
    </Container>
  );
}

const Container = styled.div``;
const CreateGenerationButton = styled(Button)`
  display: block;
  margin-left: auto;
`;
const SessionGenerationLink = styled.div`
  cursor: pointer;
`;
SessionHome.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <DashboardLayout>{page}</DashboardLayout>
    </AuthGuard>
  );
};

export default SessionHome;
