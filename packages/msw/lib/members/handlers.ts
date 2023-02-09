import { rest } from 'msw';

import { membersData } from './data';
import type { MembersResponseBody, MeResponseBody } from './types';
import { API_URL } from './url';
import { VARIABLES } from './variables';

// 사용자 비밀번호 변경 mock API
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

// 사용자 내 정보 조회 mock API
const me = rest.get(
  process.env.NEXT_PUBLIC_API_URL + API_URL.ME,
  (request, response, context) => {
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

// 어드민 복수 회원 조회 mock API
const members = rest.get(
  process.env.NEXT_PUBLIC_API_URL + API_URL.MEMBERS,
  (request, response, context) => {
    // 인증 관련 검증 따로 진행하지 않음
    const token = request.headers.get('Authorization');

    console.log(
      `%c[GET:${API_URL.MEMBERS}]: { token: ${token} }`,
      'color: orange',
    );

    return response(
      context.status(200),
      context.json<MembersResponseBody>({
        data: membersData,
      }),
    );
  },
);

// 어드민 단건 회원 생성 mock API
const createMember = rest.post(
  (process.env.NEXT_PUBLIC_API_URL = API_URL.MEMBERS),
  async (request, response, context) => {
    const {
      name,
      gender,
      email,
      phoneNumber,
      generations,
      position,
      subPosition,
      status,
      isManager,
    } = await request.json();

    // 인증 관련 검증 따로 진행하지 않음
    const token = request.headers.get('Authorization');
    const member = {
      name,
      gender,
      email,
      phoneNumber,
      generations,
      position,
      subPosition,
      status,
      isManager,
    };

    console.log(
      `%c[POST:${API_URL.MEMBERS}]: { member: ${member} }`,
      'color: orange',
    );
    console.log(
      `%c[POST:${API_URL.MEMBERS}]: { token: ${token} }`,
      'color: orange',
    );

    return response(context.status(201));
  },
);

// 어드민 복수 회원 생성 mock API
const createMembersBulk = rest.post(
  (process.env.NEXT_PUBLIC_API_URL = API_URL.MEMBERS_BULK),
  async (request, response, context) => {
    // TODO: data 형식 (csv 포맷)으로 보낼지 확인하기
    const { data } = await request.json();

    // 인증 관련 검증 따로 진행하지 않음
    const token = request.headers.get('Authorization');

    console.log(
      `%c[POST:${API_URL.MEMBERS_BULK}]: { data: ${data} }`,
      'color: orange',
    );
    console.log(
      `%c[POST:${API_URL.MEMBERS_BULK}]: { token: ${token} }`,
      'color: orange',
    );

    return response(context.status(201));
  },
);

// 어드민 회원 수정 mock API
const updateMember = rest.put(
  (process.env.NEXT_PUBLIC_API_URL = API_URL.MEMBER),
  async (request, response, context) => {
    const { id } = request.params;
    const { name, gender, email, phoneNumber, generations, isManager } =
      await request.json();
    const data = { name, gender, email, phoneNumber, generations, isManager };

    // 인증 관련 검증 따로 진행하지 않음
    const token = request.headers.get('Authorization');

    console.log(`%c[PUT:${API_URL.MEMBER}]: { id: ${id} }`, 'color: orange');
    console.log(
      `%c[PUT:${API_URL.MEMBER}]: { data: ${data} }`,
      'color: orange',
    );
    console.log(
      `%c[PUT:${API_URL.MEMBER}]: { token: ${token} }`,
      'color: orange',
    );

    return response(context.status(200));
  },
);

// 어드민 회원 삭제 mock API
const deleteMember = rest.delete(
  (process.env.NEXT_PUBLIC_API_URL = API_URL.MEMBER),
  async (request, response, context) => {
    const { id } = request.params;

    // 인증 관련 검증 따로 진행하지 않음
    const token = request.headers.get('Authorization');

    console.log(`%c[DELETE:${API_URL.MEMBER}]: { id: ${id} }`, 'color: orange');
    console.log(
      `%c[DELETE:${API_URL.MEMBER}]: { token: ${token} }`,
      'color: orange',
    );

    return response(context.status(204));
  },
);

const handlers = [
  password,
  me,
  members,
  createMember,
  createMembersBulk,
  updateMember,
  deleteMember,
] as const;

export { handlers };
