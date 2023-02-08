import { useRedirectEffect } from '~/hooks/useRedirectEffect';

function NotFound() {
  useRedirectEffect(process.env.NEXT_PUBLIC_ADMIN_URL ?? '');
  return null;
}

export default NotFound;
