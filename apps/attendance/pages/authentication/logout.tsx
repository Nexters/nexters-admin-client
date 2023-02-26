import { queryClient } from '@weekly/api';
import { useAuthToken, useRedirectEffect } from '@weekly/utils';
import { useEffect } from 'react';

function Logout() {
  const { removeToken } = useAuthToken();
  useEffect(() => {
    removeToken();
    queryClient.removeQueries();
  }, []);
  useRedirectEffect('/authentication/login');
  return null;
}

export default Logout;
