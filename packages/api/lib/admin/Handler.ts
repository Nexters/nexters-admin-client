import {
  AdminLoginRequest,
  CreateAdministratorRequest,
  CreateMemberRequest,
  TokenResponse,
  UpdateMemberPositionRequest,
  UpdateMemberRequest,
  UpdateMemberStatusRequest,
} from '../../dto/admin';
import { FindAllMembersResponse } from '../../dto/attendance';
import { ContentType, HttpClient, RequestParams } from '../HttpClient';

/**
 * @title 넥스터즈 출석체크 백엔드 API
 * @version 1.0
 * @baseUrl http://www.chulchul.site
 */
export class Handler<SecurityDataType> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
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
  };
}
