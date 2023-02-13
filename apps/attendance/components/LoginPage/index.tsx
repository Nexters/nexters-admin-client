import { styled } from '@weekly/ui';
import Image from 'next/image';
import { Fragment } from 'react';

import logo from '~/images/logo.png';

import { BottomSheet } from './BottomSheet';
import { LoginForm } from './LoginForm';

function LoginPage() {
  return (
    <Fragment>
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
        Weekly에 오신 걸 환영해요!`}
      </Description>
      <LoginForm />
      <HelpButton href='#help-login'>로그인 방법이 궁금해요</HelpButton>
      <BottomSheet />
    </Fragment>
  );
}

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

const HelpButton = styled.a`
  background: none;
  border: none;
  text-decoration: underline;
  ${({ theme }) => theme.typo.body1Medium};
  color: ${({ theme }) => theme.palette.grayScale.g10};
  margin-top: ${({ theme }) => theme.rem(16)};
`;

export { LoginPage };
