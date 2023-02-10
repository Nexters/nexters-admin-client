import { useRedirectEffect } from '@weekly/utils';

function NotFound() {
  useRedirectEffect('/attendance');
  return null;
}

export default NotFound;
