import Lottie from 'lottie-react';

import weeklyLoading from './weekly_loading.json';

function Loader() {
  return <Lottie height={300} animationData={weeklyLoading} />;
}

export { Loader };
