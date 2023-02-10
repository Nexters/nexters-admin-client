import styled from '@emotion/styled';

interface TextFieldProps extends React.ComponentProps<'input'> {
  error: string;
}

type Props = Partial<TextFieldProps>;

function TextField(props: Props) {
  const { error } = props;
  return (
    <Container>
      <Input error={error} {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const Input = styled.input<Props>`
  ${({ theme }) => theme.typo.body1Bold}
  border: none;
  width: 100%;
  padding: ${({ theme }) => theme.rem(16)};
  border-radius: ${({ theme }) => theme.rem(16)};
  background-color: ${({ theme }) => theme.palette.grayScale.g95};
  color: ${({ theme }) => theme.palette.grayScale.white};
  outline: 1px solid
    ${({ theme, error }) =>
    error ? theme.palette.main.red100 : theme.palette.main.green50};

  &:focus,
  &:hover {
    outline: 1px solid
      ${({ theme, error }) =>
    error ? theme.palette.main.red100 : theme.palette.main.green50};
  }

  &:placeholder-shown {
    ${({ theme }) => theme.typo.body1Medium};
    color: ${({ theme }) => theme.palette.grayScale.g50};
    outline: 1px solid ${({ theme }) => theme.palette.grayScale.g50};
  }
`;

const ErrorMessage = styled.span<Props>`
  ${({ theme }) => theme.typo.body2Medium}
  position: absolute;
  left: 0;
  transform: translateY(100%);
  bottom: ${({ theme }) => theme.rem(-4)};
  color: ${({ theme }) => theme.palette.main.red100};
`;

export { TextField };
