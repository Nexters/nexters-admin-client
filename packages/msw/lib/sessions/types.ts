type Session = {
  sessionDate: Date;
  title: string;
  description: string;
  sessionStatus: 'PENDING' | 'ONGOING' | 'EXPIRED';
  attendanceStatus:
    | 'PENDING'
    | 'TARDY'
    | 'ATTENDED'
    | 'UNAUTHORIZED_ABSENCE'
    | 'AUTHORIZED_ABSENCE';
  attendanceTime: Date;
};

export type { Session };
