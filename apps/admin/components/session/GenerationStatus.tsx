import { useDeleteGeneration } from '@weekly/api';
import { GenerationResponse } from '@weekly/api/lib/types/admin';
import { Icon, openConfirmSnackBar, styled } from '@weekly/ui';

{
}
function GenerationStatus({ generation }: { generation: GenerationResponse }) {
  const { mutate: deleteMutate } = useDeleteGeneration();

  const onDelete = () => {
    deleteMutate(generation.generation);
    openConfirmSnackBar(`${generation.generation}기가 삭제되었어요`);
  };

  switch (generation.status) {
  case 'BEFORE_ACTIVITY':
    return (
      <Delete onClick={onDelete}>
        <Icon name='trash' />
      </Delete>
    );
  case 'DURING_ACTIVITY':
    return <During>활동중</During>;
  case 'FINISH_ACTIVITY':
    return <Finish>활동 종료</Finish>;
  case 'NULL':
    return <></>;
  }
}
const Delete = styled.div`
  color: #424957;
  width: 20px;
  margin-left: auto;
`;
const During = styled.div`
  ${({ theme }) => theme.typo.body2Regular}
  color :#1BB847;
  background-color: #ecffcb;
  padding: ${({ theme }) => `${theme.rem(4)} ${theme.rem(12)}`};
  display: inline-block;
  border-radius: ${({ theme }) => theme.rem(4)};
`;
const Finish = styled.div`
  ${({ theme }) => theme.typo.body2Regular}
  color :${({ theme }) => theme.palette.main.red100};
  padding: ${({ theme }) => `${theme.rem(4)} ${theme.rem(12)}`};
`;

export default GenerationStatus;
