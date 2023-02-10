import { useRedirectEffect } from '~/hooks/useRedirectEffect';

function NotFound() {
  useRedirectEffect('/attendance');
  return null;
}

export default NotFound;
