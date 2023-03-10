import { styled } from '../emotion';
import { Icon } from '../icons/Icon';

interface SearchProps extends React.ComponentProps<'input'> {
  width: number;
}
type Props = Partial<SearchProps>;
type ContainerProps = Pick<Props, 'width'>;
type InputProps = Omit<Props, 'width'>;

function Search(props: Props) {
  const { width } = props;
  return (
    <Container width={width}>
      <Input {...props} placeholder='검색어를 입력하세요.' />
      <Icon name='search' />
    </Container>
  );
}

const Container = styled.div<ContainerProps>`
  width: ${({ theme, width }) => (width ? theme.rem(width) : '100%')};
  padding: ${({ theme }) => `${theme.rem(12)} ${theme.rem(16)}`};
  background-color: ${({ theme }) => theme.palette.grayScale.g20};
  border-radius: ${({ theme }) => theme.rem(12)};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.rem(8)};
`;

const Input = styled.input<InputProps>`
  border: none;
  background-color: transparent;
  width: 100%;
  padding: 0;

  ${({ theme }) => theme.typo.body1Medium}
  color : ${({ theme }) => theme.palette.grayScale.g95};

  &:focus {
    color: ${({ theme }) => theme.palette.grayScale.g80};
  }
  &::placeholder {
    color: ${({ theme }) => theme.palette.grayScale.g50};
  }
`;

export { Search };
