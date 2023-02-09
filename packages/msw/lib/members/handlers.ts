import { rest } from 'msw';

import type { MeResponseBody } from './types';
import { API_URL } from './url';
import { VARIABLES } from './variables';

// 비밀번호 변경 mock API
const password = rest.put(
  process.env.NEXT_PUBLIC_API_URL + API_URL.PASSWORD,
  async (request, response, context) => {
    // 인증 관련 검증 따로 진행하지 않음
    const { password } = await request.json();
    const token = request.headers.get('Authorization');

    console.log(
      `%c[PUT:${API_URL.PASSWORD}]: { password: ${password} }`,
      'color: orange',
    );
    console.log(
      `%c[PUT:${API_URL.PASSWORD}]: { token: ${token} }`,
      'color: orange',
    );

    return response(context.status(204));
  },
);

// 내 정보 조회 mock API
const me = rest.get(
  process.env.NEXT_PUBLIC_API_URL + API_URL.ME,
  async (request, response, context) => {
    // 인증 관련 검증 따로 진행하지 않음
    const token = request.headers.get('Authorization');

    console.log(`%c[GET:${API_URL.ME}]: { token: ${token} }`, 'color: orange');

    return response(
      context.status(200),
      context.json<MeResponseBody>({
        name: VARIABLES.NAME,
        generation: VARIABLES.GENERATION,
        position: VARIABLES.POSITION,
      }),
    );
  },
);

const handlers = [password, me] as const;

export { handlers };
