type QRResponse = {
  mode: 'ATTENDED' | 'TRADY';
  sessionId: number;
};

type MemberAttendanceBody = {
  nonce: string;
};

export type { MemberAttendanceBody, QRResponse };
