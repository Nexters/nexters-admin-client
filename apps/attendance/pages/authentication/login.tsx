import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

import { LoginPage } from '~/components';

function Login() {
  return (
    <Fragment>
      <NextSeo title='로그인' />
      <LoginPage />
    </Fragment>
  );
}

export default Login;
