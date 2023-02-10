import { useRedirectEffect } from '~/hooks/useRedirectEffect';

function Home() {
  useRedirectEffect('/attendance');
  return null;
}

export default Home;
