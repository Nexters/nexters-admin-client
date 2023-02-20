import { Icon, styled } from '@weekly/ui';

import { useSidebarState } from '~/atoms/sidebar';
import { useUserState } from '~/atoms/user';

function MenuButton() {
  const { open } = useSidebarState();
  const user = useUserState();
  return (
    <Container onClick={open} disabled={!user}>
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
