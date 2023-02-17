import { atom, useAtom } from 'jotai';

const sidebarAtom = atom(false);

function useSidebarState() {
  const [value, setValue] = useAtom(sidebarAtom);
  const open = () => setValue(true);
  const close = () => setValue(false);
  const toggle = () => setValue((prev) => !prev);
  return {
    value,
    open,
    close,
    toggle,
  };
}

export { useSidebarState };
