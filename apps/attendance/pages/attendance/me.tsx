import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

import { AuthGuard, Layout, MyAttendancePage } from '~/components';

function Me() {
  return (
    <Fragment>
      <NextSeo title='내 출석 정보' />
      <MyAttendancePage />
    </Fragment>
  );
}

Me.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <Layout>{page}</Layout>
    </AuthGuard>
  );
};

export default Me;
