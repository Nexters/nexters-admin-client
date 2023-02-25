import { useAuthToken, useRedirectEffect } from '@weekly/utils';
import { useEffect } from 'react';

function Logout() {
  const { removeToken } = useAuthToken();
  useEffect(() => {
    removeToken();
  }, []);
  useRedirectEffect('/authentication/login');
  return null;
}

export default Logout;
