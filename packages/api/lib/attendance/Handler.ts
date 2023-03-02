
import { ContentType, HttpClient, RequestParams } from '../HttpClient';
import { AttendanceProfileResponse, FindProfileResponse, FindSessionHomeResponse, MemberLoginRequest, MemberLoginResponse, UpdatePasswordRequest } from '../types/attendance';

/**
 * @title 넥스터즈 출석체크 백엔드 API
 * @version 1.0
 * @baseUrl http://www.chulchul.site
 */
export class Handler<SecurityDataType> extends HttpClient<SecurityDataType> {
  attendance = {
    /**
     * @tags Auth
     * @name MemberAdmin
     * @summary 사용자 로그인
     * @request POST:/api/auth/login/member
     */
    memberLogin: (data: MemberLoginRequest, params: RequestParams = {}) =>
      this.request<MemberLoginResponse>({
        path: '/api/auth/login/member',
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
    /**
     * @tags Member
     * @name MemberPassword
     * @summary 사용자 비밀번호 변경
     * @request PUT:/api/members/password
     */
    updatePassword: (data: UpdatePasswordRequest, params: RequestParams = {}) =>
      this.request({
        path: '/api/members/password',
        method: 'PUT',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
    /**
     * @tags Member
     * @name MemberProfile
     * @summary 사용자 출석 정보 조회
     * @request GET:/api/members/me
     * @secure
     */
    memberMe: (params: RequestParams = {}) =>
      this.request<FindProfileResponse>({
        path: '/api/members/me',
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        secure: true,
        ...params,
      }),
    /**
     * @tags Attendance
     * @name AttendanceProfile
     * @summary 사용자 출석 정보 조회
     * @request GET:/api/attendance/me
     * @secure
     */
    attendanceMe: (params: RequestParams = {}) =>
      this.request<AttendanceProfileResponse>({
        path: '/api/attendance/me',
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        secure: true,
        ...params,
      }),
    /**
     * @tags Session
     * @name SessionHome
     * @summary 사용자 메인 세션 조회
     * @request GET:/api/sessions/home
     * @secure
     */
    sessionHome: (params: RequestParams = {}) =>
      this.request<FindSessionHomeResponse>({
        path: '/api/sessions/home',
        method: 'GET',
        type: ContentType.Json,
        format: 'json',
        secure: true,
        ...params,
      }),
  };
}
