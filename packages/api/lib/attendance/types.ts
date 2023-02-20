type QRResponse = {
  mode: 'ATTENDED' | 'TRADY';
  sessionId: number;
};

type MemberAttendanceBody = {
  nonce: string;
};

type AttendanceStatus =
  | 'PENDING'
  | 'ATTENDED'
  | 'TARDY'
  | 'UNAUTHORIZED_ABSENCE'
  | 'AUTHORIZED_ABSENCE';

type AttendanceResponse = {
  title: string;
  week: number;
  sessionDate: string;
  attendanceStatus: AttendanceStatus;
  attendanceTime: string;
  penaltyScore: number;
};

type AttendanceData = {
  score: number;
  isCompletable: boolean;
  attendances: AttendanceResponse[];
};

type MeAttendanceResponseBody = {
  attendanceData: AttendanceData;
  isGenerationMember: boolean;
};

export type {
  AttendanceData,
  MeAttendanceResponseBody,
  MemberAttendanceBody,
  QRResponse,
};
