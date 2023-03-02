import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

import { AuthGuard, Layout, PasswordPage } from '~/components';

function Password() {
  return (
    <Fragment>
      <NextSeo title='비밀번호 재설정' />
      <PasswordPage />
    </Fragment>
  );
}

Password.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <Layout>{page}</Layout>
    </AuthGuard>
  );
};

export default Password;
