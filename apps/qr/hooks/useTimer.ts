import { useEffect, useRef, useState } from 'react';

function useTimer() {
  const [value, setValue] = useState(0);
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerId.current = setTimeout(function tick() {
      setValue((prev) => prev + 1000);
      timerId.current = setTimeout(tick, 1000);
    }, 1000);

    return () => {
      timerId.current && clearTimeout(timerId.current);
    };
  }, []);

  return value;
}

export { useTimer };
