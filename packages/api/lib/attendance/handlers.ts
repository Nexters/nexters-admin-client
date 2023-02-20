import { rest } from 'msw';

import { me, qr } from './data';
import type { MeAttendanceResponseBody, QRResponse } from './types';
import { API_URL } from './urls';
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

// 내 출석 정보 조회 mock API
const meAttendance = rest.get(
  process.env.NEXT_PUBLIC_API_URL + API_URL.ME,
  async (request, response, context) => {
    // 인증 관련 검증 따로 진행하지 않음
    const token = request.headers.get('Authorization');

    console.log(`%c[GET:${API_URL.ME}]: { token: ${token} }`, 'color: orange');

    return response(
      context.status(200),
      context.json<MeAttendanceResponseBody>(me),
    );
  },
);

// 어드민 QR 코드 조회 mock API
const getQrCode = rest.get(
  process.env.NEXT_PUBLIC_API_URL + API_URL.QR_CODE,
  async (request, response, context) => {
    // 인증 관련 검증 따로 진행하지 않음
    const token = request.headers.get('Authorization');

    console.log(
      `%c[GET:${API_URL.QR_CODE}]: { token: ${token} }`,
      'color: orange',
    );

    return response(context.status(200));
  },
);

// 어드민 QR 코드 생성 mock API
const postQrCode = rest.post(
  process.env.NEXT_PUBLIC_API_URL + API_URL.QR_CODE,
  async (request, response, context) => {
    // 인증 관련 검증 따로 진행하지 않음
    const token = request.headers.get('Authorization');

    console.log(
      `%c[POST:${API_URL.QR_CODE}]: { token: ${token} }`,
      'color: orange',
    );

    return response(context.status(200), context.json<QRResponse>(qr));
  },
);

// 어드민 QR 코드 생성 중단 mock API
const deleteQrCode = rest.delete(
  process.env.NEXT_PUBLIC_API_URL + API_URL.QR_CODE,
  async (request, response, context) => {
    // 인증 관련 검증 따로 진행하지 않음
    const token = request.headers.get('Authorization');

    console.log(
      `%c[DELETE:${API_URL.QR_CODE}]: { token: ${token} }`,
      'color: orange',
    );

    return response(context.status(204));
  },
);

const handlers = [
  memberAttendance,
  meAttendance,
  getQrCode,
  postQrCode,
  deleteQrCode,
] as const;

export { handlers };
