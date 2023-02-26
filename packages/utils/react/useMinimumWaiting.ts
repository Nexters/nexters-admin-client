import { useEffect, useState } from 'react';

function useMinimumWaiting() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 600);
  }, []);

  return isLoading;
}

export { useMinimumWaiting };
