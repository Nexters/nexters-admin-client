import { styled } from '../emotion';

interface TextFieldProps extends React.ComponentProps<'input'> {
  error: boolean;
}

type Props = Partial<TextFieldProps>;

function TextField(props: Props) {
  const { error } = props;
  return <Input error={error} {...props} />;
}

const Input = styled.input<Props>`
  ${({ theme }) => theme.typo.body1Bold}
  border: none;
  width: 100%;
  padding: ${({ theme }) => theme.rem(16)};
  border-radius: ${({ theme }) => theme.rem(16)};
  background-color: ${({ theme }) => theme.palette.grayScale.g95} !important;
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

export { TextField };
