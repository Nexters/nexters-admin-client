import { useRedirectEffect } from '~/hooks/useRedirectEffect';

function Home() {
  useRedirectEffect(process.env.ADMIN_URL ?? '');
  return null;
}

export default Home;
