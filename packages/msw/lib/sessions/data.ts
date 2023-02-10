import type { Session } from './types';

const session: Session = {
  sessionDate: new Date(2023, 0, 1),
  title: 'OT',
  description: '1주차 세션',
  sessionStatus: 'PENDING',
  attendanceStatus: 'PENDING',
  attendanceTime: new Date(2023, 0, 1, 0, 5, 0),
};

export { session };
