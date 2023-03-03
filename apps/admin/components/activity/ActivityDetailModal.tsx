import { useActivityHistory } from '@weekly/api';
import { Button, styled } from '@weekly/ui';
import { useRouter } from 'next/router';

import SessionHistory from './SessionHistory';

function ActivityDetailModal({
  closeModal,
  memberId,
}: {
  closeModal: () => void;
  memberId: number;
}) {
  const { query } = useRouter();
  const { data: histories } = useActivityHistory(
    memberId,
    Number(query.generation),
  );
  return (
    <Container>
      <ModalTitle>
        <h4>히스토리</h4>
      </ModalTitle>
      <Content>
        {histories?.data.map((history) => (
          <SessionHistory history={history} />
        ))}
      </Content>
      <ConfirmButton>
        <Button fullWidth onClick={closeModal}>
          확인
        </Button>
      </ConfirmButton>
    </Container>
  );
}
const Container = styled.div``;
const ModalTitle = styled.div`
  ${({ theme }) => theme.typo.h4Bold}
  display:flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.rem(16)} ${theme.rem(4)}`};
  svg {
    color: ${({ theme }) => theme.palette.grayScale.g50};
    &:hover {
      cursor: pointer;
    }
  }
`;
const Content = styled.div`
  height: ${({ theme }) => theme.rem(352)};
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  & > div:not(:first-of-type) {
    margin-top: ${({ theme }) => theme.rem(16)};
  }
`;
const ConfirmButton = styled.div`
  margin-top: ${({ theme }) => theme.rem(20)};
`;

export default ActivityDetailModal;
