import { NextSeo } from 'next-seo';
import { Fragment } from 'react';

import { MyAttendancePage } from '~/components/MyAttendancePage';

function Me() {
  return (
    <Fragment>
      <NextSeo title='내 출석 정보' />
      <MyAttendancePage />
    </Fragment>
  );
}

export default Me;
