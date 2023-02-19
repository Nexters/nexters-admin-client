import { Chip, styled } from '@weekly/ui';

type Props = {
  score: number;
  isCompletable: boolean;
};

function CompletableInfo(props: Props) {
  const { score, isCompletable } = props;
  return (
    <Container>
      <ScoreInfo>
        총점 <Score>{score}점</Score>
      </ScoreInfo>
      <Chip type={isCompletable ? 'success' : 'alert'}>
        {isCompletable ? '수료 가능' : '수료 불가'}
      </Chip>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.rem(20)};
`;

const ScoreInfo = styled.h3`
  ${({ theme }) => theme.typo.h3Bold};
  color: ${({ theme }) => theme.palette.grayScale.g10};
`;

const Score = styled.span`
  ${({ theme }) => theme.typo.h3Bold};
  color: ${({ theme }) => theme.palette.main.green50};
`;

export { CompletableInfo };
