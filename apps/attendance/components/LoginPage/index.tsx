import { styled } from '@weekly/ui';
import Image from 'next/image';

import logo from '~/images/logo.png';

import { LoginForm } from './LoginForm';

function LoginPage() {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={logo}
          alt="WEEKLY"
          placeholder="blur"
          width={255}
          height={243}
        />
      </ImageContainer>
      <LoginForm />
    </Container>
  );
}

const Container = styled.div`
  min-width: ${({ theme }) => theme.rem(320)};
  max-width: ${({ theme }) => theme.rem(743)};
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.grayScale.g100};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.rem(20)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 453px;
  margin-bottom: ${({ theme }) => theme.rem(36)};
`;

export { LoginPage };
