import { NextApiResponse } from 'next/types';

export function removeCookie(name: string) {
  document.cookie = `${name}=; path=/; Max-Age=0`;
}

export function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value};path=/`;
}

export function setSSRCookie(
  name: string,
  value: string,
  res: NextApiResponse,
) {
  res.setHeader('Set-Cookie', `${name}=${value};path=/`);
}

export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
}

export function getSSRCookie(name: string, cookies: string) {
  const value = `; ${cookies}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
}
