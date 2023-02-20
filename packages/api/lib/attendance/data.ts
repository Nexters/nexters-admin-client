import type { MeResponseBody, QRResponse } from './types';

const qr: QRResponse = {
  mode: 'ATTENDED',
  sessionId: 1,
};

const me: MeResponseBody = {
  isGenerationMember: true,
  attendanceData: {
    score: 90,
    attendances: [
      {
        title: '1주차 세션',
        week: 1,
        sessionDate: '2023-02-13',
        attendanceStatus: 'UNAUTHORIZED_ABSENCE',
        attendanceTime: '2023-02-13 10:11:12',
        penaltyScore: 10,
      },
      {
        title: '2주차 세션',
        week: 2,
        sessionDate: '2023-02-20',
        attendanceStatus: 'ATTENDED',
        attendanceTime: '2023-02-20 13:14:15',
        penaltyScore: 0,
      },
    ],
    isCompletable: true,
  },
};

export { me, qr };
