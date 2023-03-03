import { Icon, styled } from '@weekly/ui';

function Empty({ message }: { message: string }) {
  return (
    <EmptySession>
      <Icon name='box' />
      <p>{message}</p>
    </EmptySession>
  );
}
const EmptySession = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.palette.grayScale.g50};
  margin: auto;
  padding-top: 200px;
  p {
    margin-top: 14px;
    white-space: pre-wrap;
    text-align: center;
  }
`;

export default Empty;
