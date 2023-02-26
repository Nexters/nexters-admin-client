import { styled } from '@weekly/ui';
import Image from 'next/image';
import { Fragment } from 'react';

import logo from '~/assets/images/logo.png';

import { LoginForm } from './LoginForm';

function Login() {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={logo}
          alt='WEEKLY'
          placeholder='blur'
          width={255}
          height={243}
        />
      </ImageContainer>
      <Description>
        {`넥스터즈 출석 서비스
        Weekly의 관리자 페이지입니다`}
      </Description>
      <LoginForm />
    </Container>
  );
}

const Container = Fragment;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.rem(36)};
`;

const Description = styled.h2`
  white-space: pre-line;
  align-self: flex-start;
  ${({ theme }) => theme.typo.h2Bold};
  margin-bottom: ${({ theme }) => theme.rem(32)};
  color: ${({ theme }) => theme.palette.grayScale.white};
`;

export { Login };
