import { Icon, styled } from '@weekly/ui';

import { useSidebarState } from '~/atoms/sidebar';

function Sidebar() {
  const { value, close } = useSidebarState();
  return (
    <Container open={value}>
      <CloseButton onClick={close}>
        <Icon name='close' />
      </CloseButton>
    </Container>
  );
}

const Container = styled.div<{ open: boolean }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 50%;
  transition: transform 0.4s ease;
  min-width: ${({ theme }) => theme.rem(320)};
  transform: ${({ open }) => (open ? 'translateX(-50%)' : 'translateX(-150%)')};
  max-width: ${({ theme }) => theme.rem(743)};
  padding: ${({ theme }) => `${theme.rem(40)} ${theme.rem(20)}`};
  background-color: ${({ theme }) => theme.palette.grayScale.g100};
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: ${({ theme }) => theme.rem(24)};
  height: ${({ theme }) => theme.rem(24)};
  color: ${({ theme }) => theme.palette.grayScale.white};
`;

export { Sidebar };
