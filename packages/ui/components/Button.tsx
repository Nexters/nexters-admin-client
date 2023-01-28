import styled from '@emotion/styled';

export interface ButtonProps extends React.ComponentProps<'button'> {
  fullWidth: boolean;
}

type Props = Partial<ButtonProps>;

function Button(props: Props) {
  const { children } = props;
  return <Container>{children}</Container>;
}

const Container = styled.button<Props>``;

export { Button };
