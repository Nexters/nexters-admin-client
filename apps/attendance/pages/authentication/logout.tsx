import { useRedirectEffect } from '@weekly/utils';
import { useEffect } from 'react';

function Logout() {
  useEffect(() => {
    localStorage.removeItem('@weekly/token');
  }, []);
  useRedirectEffect('/authentication/login');
  return null;
}

export default Logout;
