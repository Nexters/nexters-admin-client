export interface TokenResponse {
  token: string;
}

export interface UpdateSessionRequest {
  title: string;
  description?: string;
  message?: string;
  /** @format int32 */
  generation: number;
  /** @format date */
  sessionDate: string;
  /** @format int32 */
  week: number;
}

export interface UpdateMemberRequest {
  name: string;
  gender: string;
  email: string;
  phoneNumber: string;
  generations: number[];
}

export interface UpdateMemberStatusRequest {
  status: string;
}

export interface UpdateMemberPositionRequest {
  position?: string;
  subPosition?: string;
}

export interface UpdateGenerationRequest {
  ceo: string;
  status: 'BEFORE_ACTIVITY' | 'DURING_ACTIVITY' | 'FINISH_ACTIVITY' | 'NULL';
}

export interface CreateSessionRequest {
  title: string;
  description?: string;
  message?: string;
  /** @format int32 */
  generation: number;
  /** @format date */
  sessionDate: string;
  /** @format int32 */
  week: number;
}

export interface CreateSessionResponse {
  /** @format int64 */
  sessionId: number;
}

export interface CreateMemberRequest {
  name: string;
  gender: string;
  email: string;
  /**
   * @minLength 10
   * @maxLength 20
   */
  phoneNumber: string;
  generations: number[];
  position?: string;
  subPosition?: string;
  status: string;
}

export interface CreateGenerationRequest {
  /** @format int64 */
  generation: number;
}

export interface AdminLoginRequest {
  username: string;
  password: string;
}

export interface InitializeQrCodesRequest {
  /** @format int64 */
  sessionId: number;
  qrCodeType: string;
}

export interface CreateAdministratorRequest {
  username: string;
  password: string;
}

export interface GenerationResponses {
  data: GenerationResponse[];
}

export interface GenerationResponse {
  /** @format int64 */
  generation: number;
  ceo?: string;
  status: 'BEFORE_ACTIVITY' | 'DURING_ACTIVITY' | 'FINISH_ACTIVITY' | 'NULL';
}

export interface CurrentQrCodeResponse {
  /** @format int64 */
  sessionId: number;
  week: number;
  sessionDate: string;
  qrCode: string;
  qrCodeType: string;
  /** @format date-time */
  expirationTime: string;
}

export interface FindSessionResponses {
  data: FindSessionResponse[];
}

export interface FindSessionResponse {
  /** @format int64 */
  id: number;
  title: string;
  description?: string;
  /** @format int64 */
  generation: number;
  /** @format date */
  sessionDate: string;
  /** @format int64 */
  week: number;
  /** @format date-time */
  startAttendTime?: string;
  /** @format date-time */
  endAttendTime?: string;
}

export interface UpdateAttendanceStatusRequest {
  attendanceStatus: string;
  note: string;
}

export interface UpdateExtraAttendanceScoreChangeRequest {
  extraScoreChange: number;
  extraScoreNote?: string;
}

export interface AttendanceSessionResponses {
  week: number;
  sessionDate: string;
  attended: number;
  tardy: number;
  absence: number;
  data: AttendanceSessionResponse[];
}

export interface AttendanceSessionResponse {
  name: string;
  number: string;
  attendanceId: number;
  position?: string;
  subPosition?: string;
  initialGeneration: number;
  scoreChanged: number;
  score?: number;
  attendanceStatus: string;
  extraScoreNote?: string;
  note?: string;
}

export interface AttendanceActivityResponses {
  data: AttendanceActivityResponse[];
}

export interface AttendanceActivityResponse {
  generationMemberId: number;
  name: string;
  position?: string;
  subPosition: string;
  initialGeneration: number;
  score?: number;
  isCompletable: boolean;
  isManager?: boolean;
}

export interface AttendanceActivityHistoryResponses {
  data: AttendanceActivityHistoryResponse[];
}

export interface AttendanceActivityHistoryResponse {
  title: string;
  week: number;
  sessionDate: string;
  attendanceStatus: string;
  attendanceTime?: string;
  penaltyScore: number;
}
