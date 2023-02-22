import { styled } from '@weekly/ui';

import { LoginPage } from '~/components/LoginPage';

function Login() {
  return (
    <Wrapper>
      <Container>
        <LoginPage />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.grayScale.g100};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 335px;
`;

export default Login;
