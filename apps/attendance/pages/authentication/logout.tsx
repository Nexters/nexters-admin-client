import { queryClient } from '@weekly/api';
import { removeCookie, useRedirectEffect } from '@weekly/utils';
import { useEffect } from 'react';

function Logout() {
  useEffect(() => {
    removeCookie('accessToken');
    queryClient.removeQueries();
  }, []);
  useRedirectEffect('/authentication/login');
  return null;
}

export default Logout;
