import { forwardRef } from 'react';

import { styled } from '../emotion';

interface InputProps extends React.ComponentProps<'input'> {
  error: boolean;
}

type Props = Partial<InputProps>;

const Input = forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const { error } = props;
  return <Container ref={ref} error={error} {...props} autoComplete={'off'} />;
});

Input.displayName = 'Input';

const Container = styled.input<Props>`
  ${({ theme }) => theme.typo.body1Medium}
  border: none;
  width: 100%;
  padding: ${({ theme }) => theme.rem(16)};
  border-radius: ${({ theme }) => theme.rem(16)};
  background-color: ${({ theme }) => theme.palette.grayScale.g20};
  color: ${({ theme }) => theme.palette.grayScale.g100};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.palette.grayScale.g50};
  }
`;

export { Input };
