import { rest } from 'msw';

import { session } from './data';
import type { Session } from './types';
import { API_URL } from './urls';

// 사용자 세션 정보 mock API
const home = rest.get(
  process.env.NEXT_PUBLIC_API_URL + API_URL.HOME,
  async (_request, response, context) => {
    return response(context.status(200), context.json<Session>(session));
  },
);

const handlers = [home] as const;

export { handlers };
