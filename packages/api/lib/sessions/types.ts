type Session = {
  sessionDate: string;
  title: string;
  description: string;
  sessionStatus: 'PENDING' | 'ONGOING' | 'EXPIRED';
  attendanceStatus:
    | 'PENDING'
    | 'TARDY'
    | 'ATTENDED'
    | 'UNAUTHORIZED_ABSENCE'
    | 'AUTHORIZED_ABSENCE';
  attendanceTime: string;
};

export type { Session };
