import { styled } from '@weekly/ui';
import { useAuthToken, useRedirectEffect } from '@weekly/utils';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import type { PropsWithChildren } from 'react';

type LayoutProps = PropsWithChildren<unknown>;

type Props = Partial<LayoutProps>;

function Layout(props: Props) {
  const { pathname } = useRouter();
  const { token } = useAuthToken();
  const { children } = props;
  useRedirectEffect(
    PAGE_URLS.LOGOUT,
    () => !token && !pathname.includes('login'),
  );
  return (
    <Container>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/images/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/images/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/images/favicon-16x16.png'
        />
      </Head>
      <NextSeo
        titleTemplate='WEEKLY | %s'
        description='Nexters 22기 출출팀 당신의 한 주의 출석을 책임지는 웹 "위클리"'
      />
      {children}
    </Container>
  );
}

const Container = styled.div<LayoutProps>`
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: ${({ theme }) => theme.rem(320)};
  max-width: ${({ theme }) => theme.rem(743)};
  padding: 0 ${({ theme }) => theme.rem(20)};
  background-color: ${({ theme }) => theme.palette.grayScale.g100};
`;

export { Layout };
