export interface UpdateSessionRequest {
  title?: string;
  description?: string;
  message?: string;
  /** @format int32 */
  generation?: number;
  /** @format date */
  sessionTime?: string;
  /** @format int32 */
  week?: number;
  /** @format date-time */
  startAttendTime?: string;
  /** @format date-time */
  endAttendTime?: string;
}

export interface UpdateMemberRequest {
  name?: string;
  gender?: string;
  email?: string;
  phoneNumber?: string;
  generations?: number[];
}

export interface UpdateMemberStatusRequest {
  status?: string;
}

export interface UpdateMemberPositionRequest {
  position?: string;
  subPosition?: string;
}

export interface UpdatePasswordRequest {
  /** @pattern ^[a-zA-Z0-9!@#$%^*]{8,20}$ */
  password?: string;
}

export interface UpdateGenerationRequest {
  ceo?: string;
  status?: 'BEFORE_ACTIVITY' | 'DURING_ACTIVITY' | 'FINISH_ACTIVITY' | 'NULL';
}

export interface CreateSessionRequest {
  title?: string;
  description?: string;
  message?: string;
  /** @format int32 */
  generation?: number;
  /** @format date */
  sessionTime?: string;
  /** @format int32 */
  week?: number;
  /** @format date-time */
  startAttendTime?: string;
  /** @format date-time */
  endAttendTime?: string;
}

export interface CreateSessionResponse {
  /** @format int64 */
  sessionId?: number;
}

export interface CreateMemberRequest {
  name?: string;
  gender?: string;
  email?: string;
  phoneNumber?: string;
  generations?: number[];
  position?: string;
  subPosition?: string;
  status?: string;
}

export interface CreateGenerationRequest {
  /** @format int64 */
  generation?: number;
  ceo?: string;
}

export interface MemberLoginRequest {
  email?: string;
  password?: string;
}

export interface MemberLoginResponse {
  token?: string;
  needPasswordReset?: boolean;
}

export interface AdminLoginRequest {
  username?: string;
  password?: string;
}

export interface TokenResponse {
  data?: string;
}

export interface CreateAdministratorRequest {
  username?: string;
  password?: string;
}

export interface Session {
  title?: string;
  description?: string;
  message?: string;
  /** @format int32 */
  generation?: number;
  /** @format date */
  sessionTime?: string;
  /** @format int32 */
  week?: number;
  /** @format date-time */
  startAttendTime?: string;
  /** @format date-time */
  endAttendTime?: string;
  /** @format int64 */
  id?: number;
}

export interface FindAllMembersResponse {
  data?: FindMemberResponse[];
}

export interface FindMemberResponse {
  /** @format int64 */
  id?: number;
  name?: string;
  gender?: string;
  email?: string;
  phoneNumber?: string;
  generations?: number[];
  position?: string;
  subPosition?: string;
  status?: string;
  isManager?: boolean;
}

export interface FindProfileResponse {
  name?: string;
  /** @format int32 */
  generation?: number;
  position?: string;
}

export interface GenerationResponse {
  /** @format int64 */
  generation?: number;
  ceo?: string;
  status?: 'BEFORE_ACTIVITY' | 'DURING_ACTIVITY' | 'FINISH_ACTIVITY' | 'NULL';
}

export interface AttendanceProfileResponse {
  /** @format int32 */
  score?: number;
  attendances?: AttendanceResponse[];
  isCompletable?: boolean;
}

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

export interface FindAttendanceProfileResponse {
  attendanceData?: AttendanceProfileResponse;
  isGenerationMember?: boolean;
}
