import { forwardRef } from 'react';

import { styled } from '../emotion';

interface TextFieldProps extends React.ComponentProps<'input'> {
  error: boolean;
}

type Props = Partial<TextFieldProps>;

const TextField = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { error } = props;
  return <Input ref={ref} error={error} {...props} />;
});

TextField.displayName = 'TextField';

const Input = styled.input<Props>`
  ${({ theme }) => theme.typo.body1Bold}
  border: none;
  width: 100%;
  padding: ${({ theme }) => theme.rem(16)};
  border-radius: ${({ theme }) => theme.rem(16)};
  background-color: ${({ theme }) => theme.palette.grayScale.g95};
  color: ${({ theme }) => theme.palette.grayScale.white};
  box-shadow: 0 0 0 1px
    ${({ theme, error }) =>
    error ? theme.palette.main.red100 : theme.palette.main.green50};

  &:focus,
  &:hover {
    box-shadow: 0 0 0 1px
      ${({ theme, error }) =>
    error ? theme.palette.main.red100 : theme.palette.main.green50};
  }

  &:placeholder-shown {
    ${({ theme }) => theme.typo.body1Medium};
    color: ${({ theme }) => theme.palette.grayScale.g50};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.grayScale.g50};
  }
`;

export { TextField };
