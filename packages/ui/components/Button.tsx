import { css, styled } from '../emotion';

interface ButtonProps extends React.ComponentProps<'button'> {
  fullWidth: boolean;
  size: ButtonSize;
  varient: ButtonVarient;
}

type Props = Partial<ButtonProps>;

type ButtonSize = 'large' | 'medium' | 'small';
type ButtonVarient = 'primary' | 'secondary';

function Button(props: Props) {
  const {
    children,
    fullWidth = false,
    size = 'large',
    varient = 'primary',
  } = props;
  return (
    <Container fullWidth={fullWidth} size={size} varient={varient} {...props}>
      {children}
    </Container>
  );
}

const Container = styled.button<ButtonProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  ${({ theme, size, varient }) =>
    size === 'small'
      ? css`
          ${theme.typo.body1Medium}
          padding: ${varient === 'primary'
    ? `${theme.rem(10)} ${theme.rem(24)}`
    : `${theme.rem(9)} ${theme.rem(23)}`};
          border-radius: ${theme.rem(8)};
        `
      : css`
          ${theme.typo.body1Bold}
          padding: ${varient === 'primary'
    ? `${theme.rem(16)} ${theme.rem(24)}`
    : `${theme.rem(16)} ${theme.rem(23)}`};
          border-radius: ${theme.rem(16)};
        `}

  ${({ theme, varient }) =>
    varient === 'primary'
      ? css`
          color: ${theme.palette.grayScale.g100};
          background-color: ${theme.palette.main.green50};
          &:active {
            background-color: ${theme.palette.main.green100};
          }
          &:disabled {
            background-color: ${theme.palette.grayScale.g40};
            color: ${theme.palette.grayScale.g70};
          }
        `
      : css`
          color: ${theme.palette.grayScale.g100};
          background-color: ${theme.palette.grayScale.white};
          border: 1px solid ${theme.palette.grayScale.g50};
          &:active {
            background-color: ${theme.palette.grayScale.g20};
          }
          &:disabled {
            background-color: ${theme.palette.grayScale.g30};
            color: ${theme.palette.grayScale.g40};
          }
        `}
`;

export { Button };
