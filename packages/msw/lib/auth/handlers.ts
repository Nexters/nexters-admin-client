import type { DefaultBodyType, ResponseComposition, RestContext } from 'msw';
import { rest } from 'msw';

import type { LoginResponse } from './types';
import { API_URL } from './url';
import { VARIABLES } from './variables';

function authentication(
  response: ResponseComposition<DefaultBodyType>,
  context: RestContext,
  predicate: () => boolean,
) {
  if (predicate()) {
    return response(
      context.status(200),
      context.json<LoginResponse>({ data: VARIABLES.SUCCESS_TOKEN }),
    );
  }
  return response(context.status(401));
}

// 사용자 로그인 mock API
const memberLogin = rest.post(
  process.env.NEXT_PUBLIC_API_URL + API_URL.MEMBER_LOGIN,
  async (request, response, context) => {
    const { email, password } = await request.json();

    console.log(
      `%c[POST:${API_URL.MEMBER_LOGIN}]: { email: ${email} }`,
      'color: orange',
    );
    console.log(
      `%c[POST:${API_URL.MEMBER_LOGIN}]: { password: ${password} }`,
      'color: orange',
    );

    return authentication(
      response,
      context,
      () => email === VARIABLES.EMAIL && password === VARIABLES.PASSWORD,
    );
  },
);

// 어드민 로그인 mock API
const adminLogin = rest.post(
  process.env.NEXT_PUBLIC_API_URL + API_URL.ADMIN_LOGIN,
  async (request, response, context) => {
    const { username, password } = await request.json();

    console.log(
      `%c[POST:${API_URL.ADMIN_LOGIN}]: { username: ${username} }`,
      'color: orange',
    );
    console.log(
      `%c[POST:${API_URL.ADMIN_LOGIN}]: { password: ${password} }`,
      'color: orange',
    );

    return authentication(
      response,
      context,
      () =>
        username === VARIABLES.ADMIN_USERNAME &&
        password === VARIABLES.ADMIN_PASSWORD,
    );
  },
);

const handlers = [memberLogin, adminLogin] as const;

export { handlers };
