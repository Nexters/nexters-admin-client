import { useRedirectEffect } from '@weekly/utils';

function Home() {
  useRedirectEffect(process.env.NEXT_PUBLIC_ADMIN_URL ?? '');
  return null;
}

export default Home;
