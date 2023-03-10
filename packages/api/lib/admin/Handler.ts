import { ContentType, HttpClient, RequestParams } from '../HttpClient';
import {
  AdminLoginRequest,
  AttendanceActivityHistoryResponses,
  AttendanceActivityResponses,
  AttendanceSessionResponses,
  CreateAdministratorRequest,
  CreateGenerationRequest,
  CreateMemberRequest,
  CreateSessionRequest,
  CreateSessionResponse,
  CurrentQrCodeResponse,
  FindSessionResponses,
  GenerationResponses,
  InitializeQrCodesRequest,
  TokenResponse,
  UpdateAttendanceStatusRequest,
  UpdateExtraAttendanceScoreChangeRequest,
  UpdateMemberPositionRequest,
  UpdateMemberRequest,
  UpdateMemberStatusRequest,
  UpdateSessionRequest,
} from '../types/admin';
import { FindAllMembersResponse } from '../types/attendance';

/**
 * @title 넥스터즈 출석체크 백엔드 API
 * @version 1.0
 * @baseUrl http://www.chulchul.site
 */
export class Handler<SecurityDataType> extends HttpClient<SecurityDataType> {
  admin = {
    /**
     * @tags Auth
     * @name LoginAdmin
     * @summary 관리자 로그인
     * @request POST:/api/auth/login/admin
     */
    loginAdmin: (data: AdminLoginRequest, params: RequestParams = {}) =>
      this.request<TokenResponse>({
        path: '/api/auth/login/admin',
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
    /**
     * @tags Members
     * @name FindAllByAdministrator
     * @summary [관리자 페이지] 회원 전체 조회
     * @request GET:/api/members
     * @secure
     */
    findAllByAdministrator: (params: RequestParams = {}) =>
      this.request<FindAllMembersResponse>({
        path: '/api/members',
        method: 'GET',
        secure: true,
        ...params,
      }),

    /**
     * @tags Members
     * @name CreateMemberByAdministrator
     * @summary [관리자 페이지] 회원 단건 생성
     * @request POST:/api/members
     * @secure
     */
    createMemberByAdministrator: (
      data: CreateMemberRequest,
      params: RequestParams = {},
    ) =>
      this.request<void>({
        path: '/api/members',
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @tags Members
     * @name CreateMembersByAdministrator
     * @summary [관리자 페이지] csv 파일 기반 회원 복수 생성
     * @request POST:/api/members/bulk
     * @secure
     */
    createMembersByAdministrator: (
      query: {
        /** @format int64 */
        generation: number;
      },
      data: {
        /** @format binary */
        csvFile: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<void>({
        path: '/api/members/bulk',
        method: 'POST',
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),
    /**
     * @tags Administrators
     * @name CreateAdministrator
     * @summary [관리자 페이지] 관리자 단건 생성
     * @request POST:/api/admin
     */
    createAdministrator: (
      data: CreateAdministratorRequest,
      params: RequestParams = {},
    ) =>
      this.request<void>({
        path: '/api/admin',
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
    /**
     * @tags Members
     * @name Update
     * @summary [관리자 페이지] 회원 정보수정
     * @request PUT:/api/members/{id}
     * @secure
     */
    update: (
      id: number,
      data: UpdateMemberRequest,
      params: RequestParams = {},
    ) =>
      this.request<void>({
        path: `/api/members/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @tags Members
     * @name Delete
     * @summary [관리자 페이지] 회원 삭제
     * @request DELETE:/api/members/{id}
     * @secure
     */
    delete: (id: number, params: RequestParams = {}) =>
      this.request<void>({
        path: `/api/members/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),

    /**
     * @tags Members
     * @name UpdateStatus
     * @summary [관리자 페이지] 회원 활동구분 수정
     * @request PUT:/api/members/{id}/status
     * @secure
     */
    updateStatus: (
      id: number,
      data: UpdateMemberStatusRequest,
      params: RequestParams = {},
    ) =>
      this.request<void>({
        path: `/api/members/${id}/status`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @tags Members
     * @name UpdatePosition
     * @summary [관리자 페이지] 회원 직군 수정
     * @request PUT:/api/members/{id}/position
     * @secure
     */
    updatePosition: (
      id: number,
      data: UpdateMemberPositionRequest,
      params: RequestParams = {},
    ) =>
      this.request<void>({
        path: `/api/members/${id}/position`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
    /**
     * @tags Session
     * @name UpdateSession
     * @summary [관리자 페이지] 세션 수정
     * @request PUT:/api/sessions/{id}
     * @secure
     */
    updateSession: (
      id: number,
      data: UpdateSessionRequest,
      params: RequestParams = {},
    ) =>
      this.request<void>({
        path: `/api/sessions/${id}`,
        method: 'PUT',
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @tags Session
     * @name DeleteSession
     * @summary [관리자 페이지] 세션 삭제
     * @request DELETE:/api/sessions/{id}
     * @secure
     */
    deleteSession: (id: number, params: RequestParams = {}) =>
      this.request<void>({
        path: `/api/sessions/${id}`,
        method: 'DELETE',
        secure: true,
        ...params,
      }),
    /**
     * @tags Session
     * @name FindSessionByGeneration
     * @summary [관리자 페이지] 특정 기수의 세션 조회
     * @request GET:/api/sessions
     * @secure
     */
    findSessionByGeneration: (
      query: {
        /** @format int32 */
        generation: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<FindSessionResponses>({
        path: '/api/sessions',
        method: 'GET',
        query: query,
        secure: true,
        format: 'json',
        ...params,
      }),

    /**
     * @tags Session
     * @name CreateSession
     * @summary [관리자 페이지] 세션 생성
     * @request POST:/api/sessions
     * @secure
     */
    createSession: (data: CreateSessionRequest, params: RequestParams = {}) =>
      this.request<CreateSessionResponse>({
        path: '/api/sessions',
        method: 'POST',
        body: data,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
    /**
     * @tags Generation
     * @name GetAllGeneration
     * @summary [관리자 페이지] 전체 기수 조회
     * @request GET:/api/generation
     * @secure
     */
    getAllGeneration: (params: RequestParams = {}) =>
      this.request<GenerationResponses>({
        path: '/api/generation',
        method: 'get',
        secure: true,
        ...params,
      }),
    /**
     * @tags Generation
     * @name DeleteGeneration
     * @summary [관리자 페이지] 기수 삭제
     * @request GET:/api/generation/{generation}
     * @secure
     */
    deleteGeneration: (generation: number, params: RequestParams = {}) =>
      this.request<GenerationResponses>({
        path: `/api/generation/${generation}`,
        method: 'delete',
        secure: true,
        ...params,
      }),
    /**
     * @tags Generation
     * @name CreateGeneration
     * @summary [관리자 페이지] 기수 삭제
     * @request GET:/api/generation/{generation}
     * @secure
     */
    createGeneration: (
      data: CreateGenerationRequest,
      params: RequestParams = {},
    ) =>
      this.request<GenerationResponses>({
        path: '/api/generation/',
        body: data,
        method: 'post',
        secure: true,
        ...params,
      }),
    /**
     * @tags Attendance
     * @name FindAttendanceBySession
     * @summary [관리자 페이지] 해당 세션에 대한 출석 정보 조회
     * @request GET:/api/attendance/{sessionId}
     * @secure
     */
    findAttendanceBySession: (sessionId: number, params: RequestParams = {}) =>
      this.request<AttendanceSessionResponses>({
        path: `/api/attendance/${sessionId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
    /**
     * @tags Attendance
     * @name FindAttendanceBySession
     * @summary [관리자 페이지] 해당 세션에 대한 출석 정보 조회
     * @request GET:/api/attendance/{attendanceId}
     * @secure
     */
    updateAttendanceStatus: (
      attendanceId: number,
      data: UpdateAttendanceStatusRequest,
      params: RequestParams = {},
    ) =>
      this.request({
        path: `/api/attendance/${attendanceId}/status`,
        method: 'PUT',
        body: data,
        secure: true,
        ...params,
      }),
    /**
     * @tags Attendance
     * @name UpdateAttendanceAdditionalScore
     * @summary [관리자 페이지] 출석 가산점/감점 부여
     * @request GET:/api/attendance/{attendanceId}/addtional-score
     * @secure
     */
    updateAttendanceAdditionalScore: (
      attendanceId: number,
      data: UpdateExtraAttendanceScoreChangeRequest,
      params: RequestParams = {},
    ) =>
      this.request({
        path: `/api/attendance/${attendanceId}/additional-score`,
        method: 'POST',
        body: data,
        secure: true,
        ...params,
      }),
    /**
     * @tags Attendance
     * @name CreateAttendanceQr
     * @summary [관리자 페이지] 출석 시작
     * @request POST:/api/attendance/qr
     * @secure
     */
    createAttendanceQr: (
      data: InitializeQrCodesRequest,
      params: RequestParams = {},
    ) =>
      this.request({
        path: '/api/attendance/qr',
        method: 'POST',
        body: data,
        secure: true,
        ...params,
      }),
    /**
     * @tags Attendance
     * @name GetAttendanceQr
     * @summary [관리자 페이지] QR 정보 가져오기
     * @request GET:/api/attendance/qr
     * @secure
     */
    getAttendanceQr: (
      params: RequestParams = {},
    ) =>
      this.request<CurrentQrCodeResponse>({
        path: '/api/attendance/qr',
        method: 'GET',
        secure: true,
        ...params,
      }),
    /**
     * @tags Attendance
     * @name DeleteAttendanceQr
     * @summary [관리자 페이지] QR 정보 삭제
     * @request DELETE:/api/attendance/qr
     * @secure
     */
    deleteAttendanceQr: (
      params: RequestParams = {},
    ) =>
      this.request({
        path: '/api/attendance/qr',
        method: 'DELETE',
        secure: true,
        ...params,
      }),
    /**
     * @tags Attendance
     * @name FindActivityByGeneration
     * @summary [관리자 페이지] 활동 관리 조회
     * @request GET:/api/attendance/activity/{generation}
     * @secure
     */
    findActivityByGeneration: (
      generation: number,
      params: RequestParams = {},
    ) =>
      this.request<AttendanceActivityResponses>({
        path: `/api/attendance/activity/${generation}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
    /**
     * @tags Attendance
     * @name FindActivityByGeneration
     * @summary [관리자 페이지] 활동 관리 조회
     * @request GET:/api/attendance/activity/{generation}/{generationMemberId}
     * @secure
     */
    findActivityHistory: (
      generationMemberId: number,
      generation: number,
      params: RequestParams = {},
    ) =>
      this.request<AttendanceActivityHistoryResponses>({
        path: `/api/attendance/activity/${generation}/${generationMemberId}`,
        method: 'GET',
        secure: true,
        ...params,
      }),
  };
}
