import { getCookie } from '@weekly/utils';

import { Handler } from './Handler';

export const api = new Handler({
  secureWorker(secureData) {
    return {
      headers: {
        Authorization: `Bearer ${secureData}`,
      },
    };
  },
  secure: true,
});

export function initAuthorization() {
  const token = getCookie('@weekly/token');

  if (token) {
    api.setSecureData(token);
  }
}

export function setAuthorization(token: string) {
  api.setSecureData(token);
}
