import { useRedirectEffect } from '@weekly/utils';

function NotFound() {
  useRedirectEffect(process.env.NEXT_PUBLIC_ADMIN_URL ?? '');
  return null;
}

export default NotFound;
