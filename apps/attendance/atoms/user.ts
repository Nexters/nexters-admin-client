import type { MeResponseBody } from '@weekly/api';
import type { Nullable } from '@weekly/utils';
import { atom, useAtom, useAtomValue } from 'jotai';

const userAtom = atom<Nullable<MeResponseBody>>(null);

function useUserState() {
  return useAtomValue(userAtom);
}

function useSetUserState() {
  const [, setUser] = useAtom(userAtom);
  return (user: MeResponseBody) => setUser(user);
}

export { useSetUserState, useUserState };
