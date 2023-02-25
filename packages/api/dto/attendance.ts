export interface UpdatePasswordRequest {
  /**
   * @minLength 8
   * @maxLength 20
   */
  password: string;
}

export interface MemberLoginRequest {
  email: string;
  password: string;
}

export interface MemberLoginResponse {
  token: string;
  needPasswordReset: boolean;
}

export interface ValidateQrCodeRequest {
  nonce: string;
}

export interface FindSessionHomeResponse {
  data?: SessionHomeResponse;
}

export interface SessionHomeResponse {
  /** @format date */
  sessionDate?: string;
  title?: string;
  description?: string;
  sessionStatus?: 'PENDING' | 'ONGOING' | 'EXPIRED';
  attendanceStatus?:
    | 'PENDING'
    | 'ATTENDED'
    | 'TARDY'
    | 'UNAUTHORIZED_ABSENCE'
    | 'AUTHORIZED_ABSENCE';
  /** @format date-time */
  attendanceTime?: string;
}

export interface FindAllMembersResponse {
  data: FindMemberResponse[];
}

export interface FindMemberResponse {
  /** @format int64 */
  id: number;
  name: string;
  gender: string;
  email: string;
  phoneNumber: string;
  generations: number[];
  position?: string;
  subPosition?: string;
  status: string;
  isManager: boolean;
}

export interface FindProfileResponse {
  name: string;
  /** @format int32 */
  generation: number;
  position: string;
}

export interface AttendanceProfileResponse {
  /** @format int32 */
  score: number;
  isCompletable: boolean;
  attendances: AttendanceResponse[];
}

export interface AttendanceResponse {
  title: string;
  /** @format int32 */
  week: number;
  /** @format date */
  sessionDate?: string;
  attendanceStatus:
    | 'PENDING'
    | 'ATTENDED'
    | 'TARDY'
    | 'UNAUTHORIZED_ABSENCE'
    | 'AUTHORIZED_ABSENCE';
  /** @format date-time */
  attendanceTime?: string;
  /** @format int32 */
  penaltyScore: number;
}

export interface FindAttendanceProfileResponse {
  isGenerationMember: boolean;
  attendanceData?: AttendanceProfileResponse;
}
