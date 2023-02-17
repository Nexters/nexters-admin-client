import { atom, useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

const sidebarAtom = atom(false);

function useSidebarState() {
  const [value, setValue] = useAtom(sidebarAtom);
  const open = () => setValue(true);
  const close = () => setValue(false);
  const toggle = () => setValue((prev) => !prev);
  const reset = close;
  return {
    value,
    open,
    close,
    toggle,
    reset,
  };
}

function useResetSidebarStateEffect() {
  const { pathname } = useRouter();
  const { value, reset } = useSidebarState();
  useLayoutEffect(() => {
    if (value) {
      reset();
    }
  }, [pathname]);
}

export { useResetSidebarStateEffect, useSidebarState };
