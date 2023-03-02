import { SessionHomeResponse } from '@weekly/api/lib/types/attendance';

function getSessionDescriptionMessage({
  isEmptySession,
  isTodaySession,
  isSessionPending,
  isDisplayCameraButton,
}: {
  isEmptySession: boolean,
  isTodaySession: boolean,
  isSessionPending: boolean,
  isDisplayCameraButton: boolean,
}) {
  if (isEmptySession) {
    return '넥스터즈의 정보를 빠르게 받아보세요 :)';
  }
  if (isTodaySession && isSessionPending) {
    return '아직 출석 체크 시간이 되지 않았어요!';
  }
  if (isDisplayCameraButton) {
    return '스크린의 QR코드를 찍으면 출석체크 할 수 있어요.';
  }
}

function getAttendanceStatusMessage(status: SessionHomeResponse['attendanceStatus']) {
  switch (status) {
  case 'ATTENDED':
    return '출석';
  case 'TARDY':
    return '지각';
  default:
    return undefined;
  }
}


export { getAttendanceStatusMessage, getSessionDescriptionMessage };
