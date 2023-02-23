export interface AdminLoginRequest {
  username?: string;
  password?: string;
}

export interface CreateAdministratorRequest {
  username?: string;
  password?: string;
}

export interface GenerationResponse {
  /** @format int64 */
  generation?: number;
  ceo?: string;
  status?: 'BEFORE_ACTIVITY' | 'DURING_ACTIVITY' | 'FINISH_ACTIVITY' | 'NULL';
}

export interface CreateGenerationRequest {
  /** @format int64 */
  generation?: number;
  ceo?: string;
}

export interface UpdateGenerationRequest {
  ceo?: string;
  status?: 'BEFORE_ACTIVITY' | 'DURING_ACTIVITY' | 'FINISH_ACTIVITY' | 'NULL';
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

export interface CreateSessionResponse {
  /** @format int64 */
  sessionId?: number;
}

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

export interface TokenResponse {
  data?: string;
}
