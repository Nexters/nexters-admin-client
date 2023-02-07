import { useRedirectEffect } from '~/hooks/useRedirectEffect';

function NotFound() {
  useRedirectEffect(process.env.ADMIN_URL ?? '');
  return null;
}

export default NotFound;
