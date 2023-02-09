import { rest } from 'msw';

import { API_URL } from './url';
import { VARIABLES } from './variables';

// 사용자 출석 mock API
const memberAttendance = rest.post(
  process.env.NEXT_PUBLIC_API_URL + API_URL.MEMBER_ATTENDANCE,
  async (request, response, context) => {
    const { nonce } = await request.json();

    // 인증 관련 검증 따로 진행하지 않음
    const token = request.headers.get('Authorization');

    console.log(
      `%c[POST:${API_URL.MEMBER_ATTENDANCE}]: { nonce: ${nonce} }`,
      'color: orange',
    );
    console.log(
      `%c[POST:${API_URL.MEMBER_ATTENDANCE}]: { token: ${token} }`,
      'color: orange',
    );

    if (nonce === VARIABLES.NONCE) {
      return response(context.status(200));
    }

    return response(context.status(400));
  },
);

const handlers = [memberAttendance] as const;

export { handlers };
