import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

import { Layout, LoginPage } from '~/components';

function Login() {
  return (
    <Fragment>
      <NextSeo title='로그인' />
      <LoginPage />
    </Fragment>
  );
}

Login.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default Login;
