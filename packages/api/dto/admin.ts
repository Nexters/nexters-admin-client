export interface TokenResponse {
  data: string;
}

export interface UpdateSessionRequest {
  title: string;
  description?: string;
  message?: string;
  /** @format int32 */
  generation: number;
  /** @format date */
  sessionTime: string;
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
  sessionTime: string;
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
  ceo: string;
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

export interface Session {
  title?: string;
  description?: string;
  message?: string;
  /** @format int32 */
  generation: number;
  /** @format date */
  sessionTime?: string;
  /** @format int32 */
  week: number;
  /** @format date-time */
  startAttendTime?: string;
  /** @format date-time */
  endAttendTime?: string;
  /** @format int64 */
  id: number;
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
  qrCode: string;
  qrCodeType: string;
  /** @format date-time */
  expirationTime: string;
}
