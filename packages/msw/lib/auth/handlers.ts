import { rest } from 'msw';

import type { LoginRequestBody, LoginResponse } from './types';
import { TEST_VARIABLES } from './variables';

const handlers = [
  // 로그인 목 API
  rest.post(
    'https://mock-api-server/api/auth/login/member',
    async (request, response, context) => {
      const { email, password } = await request.json<LoginRequestBody>();
      if (
        email === TEST_VARIABLES.EMAIL &&
        password === TEST_VARIABLES.PASSWORD
      ) {
        return response(
          context.status(200),
          context.json<LoginResponse>({ data: TEST_VARIABLES.SUCCESS_TOKEN }),
        );
      }
      return response(context.status(401));
    },
  ),
] as const;

export { handlers };
