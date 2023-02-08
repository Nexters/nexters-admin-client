import { useRedirectEffect } from '~/hooks/useRedirectEffect';

function Home() {
  useRedirectEffect(process.env.NEXT_PUBLIC_ADMIN_URL ?? '');
  return null;
}

export default Home;
