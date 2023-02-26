import { Cookies, useCookies } from 'react-cookie';

const COOKIE_KEY = '@weekly/token' as const;

function useAuthToken() {
  const [cookies, setCookie, removeCookie] = useCookies([COOKIE_KEY]);
  const setToken = (value: string) => setCookie(COOKIE_KEY, value);
  const removeToken = () => removeCookie(COOKIE_KEY);
  return {
    token: cookies[COOKIE_KEY],
    setToken,
    removeToken,
  };
}

function getAuthToken() {
  const cookies = new Cookies();
  return cookies.get(COOKIE_KEY) as string | undefined;
}

export { COOKIE_KEY, getAuthToken, useAuthToken };
