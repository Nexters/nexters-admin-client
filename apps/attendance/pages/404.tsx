import { useRedirectEffect } from '@weekly/utils';

function NotFound() {
  useRedirectEffect('/');
  return null;
}

export default NotFound;
