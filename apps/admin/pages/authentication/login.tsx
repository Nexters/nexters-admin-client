import { styled } from '@weekly/ui';

import { Login as LoginPage } from '~/components/authentication/Login';

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
