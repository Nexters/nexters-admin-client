import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

import { PasswordPage } from '~/components';

function Password() {
  return (
    <Fragment>
      <NextSeo title='비밀번호 재설정' />
      <PasswordPage />
    </Fragment>
  );
}

export default Password;
