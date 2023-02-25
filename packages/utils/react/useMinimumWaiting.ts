import { useEffect, useState } from 'react';

function useMinimumWaiting() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  return isLoading;
}

export { useMinimumWaiting };
