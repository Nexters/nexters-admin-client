import { useEffect, useRef, useState } from 'react';

function useTimer() {
  const [value, setValue] = useState(0);
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const reset = () => setValue(0);

  useEffect(() => {
    timerId.current = setTimeout(function tick() {
      setValue((prev) => prev + 1000);
      timerId.current = setTimeout(tick, 1000);
    }, 1000);

    return () => {
      timerId.current && clearTimeout(timerId.current);
    };
  }, []);

  return { timer: value, reset } as const;
}

export { useTimer };
