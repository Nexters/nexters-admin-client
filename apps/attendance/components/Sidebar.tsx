import { Icon, styled } from '@weekly/ui';

function Sidebar() {
  return (
    <Container>
      <CloseButton>
        <Icon name='close' />
      </CloseButton>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  min-width: ${({ theme }) => theme.rem(320)};
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
