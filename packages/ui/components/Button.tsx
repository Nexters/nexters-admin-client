import styled from '@emotion/styled';

export interface ButtonProps extends React.ComponentProps<'button'> {
  fullWidth: boolean;
}

type Props = Partial<ButtonProps>;

function Button(props: Props) {
  const { children, fullWidth } = props;
  return (
    <Container fullWidth={fullWidth} {...props}>
      {children}
    </Container>
  );
}

const Container = styled.button<Props>`
  ${({ theme }) => theme.typo.body1Bold}
  color: ${({ theme }) => theme.palette.grayScale.g100};

  padding: 16px 24px;
  border-radius: 16px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  background-color: ${({ theme }) => theme.palette.main.green50};

  &:active {
    background-color: ${({ theme }) => theme.palette.main.green100};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.grayScale.g40};
    color: ${({ theme }) => theme.palette.grayScale.g70};
  }
`;

export { Button };
