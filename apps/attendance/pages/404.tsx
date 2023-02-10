import { useRedirectEffect } from '~/hooks/useRedirectEffect';

function NotFound() {
  useRedirectEffect('/');
  return null;
}

export default NotFound;
