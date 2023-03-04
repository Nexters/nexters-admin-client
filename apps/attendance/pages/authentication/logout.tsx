import { queryClient } from '@weekly/api';
import { removeCookie, useRedirectEffect } from '@weekly/utils';
import { useEffect } from 'react';

import { Layout } from '~/components';

function Logout() {
  useEffect(() => {
    removeCookie('@weelky/token');
    queryClient.removeQueries();
  }, []);
  useRedirectEffect('/authentication/login');
  return null;
}

Logout.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>{page}</Layout>
  );
};

export default Logout;
