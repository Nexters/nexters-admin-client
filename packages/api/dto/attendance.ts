export interface AttendanceResponse {
  title?: string;
  /** @format int32 */
  week?: number;
  /** @format date */
  sessionDate?: string;
  attendanceStatus?:
    | 'PENDING'
    | 'ATTENDED'
    | 'TARDY'
    | 'UNAUTHORIZED_ABSENCE'
    | 'AUTHORIZED_ABSENCE';
  /** @format date-time */
  attendanceTime?: string;
  /** @format int32 */
  penaltyScore?: number;
}

export interface AttendanceProfileResponse {
  /** @format int32 */
  score?: number;
  attendances?: AttendanceResponse[];
  isCompletable?: boolean;
}

export interface FindAttendanceProfileResponse {
  attendanceData?: AttendanceProfileResponse;
  isGenerationMember?: boolean;
}

export interface MemberLoginRequest {
  email?: string;
  password?: string;
}

export interface FindProfileResponse {
  name?: string;
  /** @format int32 */
  generation?: number;
  position?: string;
}

export interface UpdatePasswordRequest {
  /** @pattern ^[a-zA-Z0-9!@#$%^*]{8,20}$ */
  password?: string;
}

export interface MemberLoginResponse {
  token?: string;
  needPasswordReset?: boolean;
}
