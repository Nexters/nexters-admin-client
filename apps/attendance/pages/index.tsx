import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

import { HomePage } from '~/components';

function Home() {
  return (
    <Fragment>
      <NextSeo title='홈' />
      <HomePage />
    </Fragment>
  );
}

export default Home;
