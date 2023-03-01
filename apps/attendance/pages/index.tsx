import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

import { AuthGuard, HomePage, Layout } from '~/components';

function Home() {
  return (
    <Fragment>
      <NextSeo title='홈' />
      <HomePage />
    </Fragment>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <Layout>{page}</Layout>
    </AuthGuard>
  );
};

export default Home;
