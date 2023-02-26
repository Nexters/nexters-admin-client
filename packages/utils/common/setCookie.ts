import { NextApiResponse } from 'next/types';

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
