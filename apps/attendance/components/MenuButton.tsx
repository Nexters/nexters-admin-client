import { Icon, styled } from '@weekly/ui';

function MenuButton() {
  return (
    <Container>
      <Icon name='user' />
    </Container>
  );
}

const Container = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.rem(40)};
  right: ${({ theme }) => theme.rem(-4)};
  width: ${({ theme }) => theme.rem(24)};
  height: ${({ theme }) => theme.rem(24)};
`;

export { MenuButton };
