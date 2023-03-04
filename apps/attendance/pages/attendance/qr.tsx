import { queryClient, useQrAttendance } from '@weekly/api';
import { useSearchParams } from '@weekly/utils';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Fragment, useEffect } from 'react';

import { AuthGuard, Layout } from '~/components';
import { PAGE_URLS } from '~/constants/urls';

function QR() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nonce = searchParams.get('nonce');
  const { mutate } = useQrAttendance();
  useEffect(() => {
    if (nonce && typeof nonce === 'string') {
      mutate(
        { nonce },
        {
          onSuccess() {
            queryClient.invalidateQueries(['session', 'home']);
            router.push(PAGE_URLS.MAIN);
          },
        },
      );
    }
  }, [nonce]);
  return (
    <Fragment>
      <NextSeo title='출석 진행 중' />
    </Fragment>
  );
}

QR.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <AuthGuard>
      <Layout>{page}</Layout>
    </AuthGuard>
  );
};

export default QR;
