import { useRedirectEffect } from '@weekly/utils';

function Home() {
  useRedirectEffect('/attendance');
  return null;
}

export default Home;
