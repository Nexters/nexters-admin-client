type Status =
  | 'PENDING'
  | 'ATTENDED'
  | 'TARDY'
  | 'UNAUTHORIZED_ABSENCE'
  | 'AUTHORIZED_ABSENCE';

function getAttendanceStatusLabel(status: Status) {
  switch (status) {
  case 'TARDY':
    return '지각';
  case 'ATTENDED':
    return '출석';
  case 'UNAUTHORIZED_ABSENCE':
    return '결석';
  case 'AUTHORIZED_ABSENCE':
    return '통보 결석';
  default:
    throw new Error(
      `[getAttendanceStatusLabel]: 잘못된 상태 (${status})가 전달됐습니다.`,
    );
  }
}

export { getAttendanceStatusLabel };
