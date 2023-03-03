import { AttendanceSessionResponse } from '@weekly/api/lib/types/attendance';
import { Icon, Modal, Popup, PopupOptions, styled } from '@weekly/ui';
import { Fragment, useState } from 'react';

import AttendanceStateModal from './AttendanceStateModal';
import ExtraScoreModal from './ExtraScoreModal';

interface AttendancePopup {
  attendanceMember: AttendanceSessionResponse;
  isLast?: boolean;
}

function AttendancePopup({
  attendanceMember,
  isLast = false,
}: AttendancePopup) {
  const [attendanceStateModalOpen, setAttendanceStateModalOpen] =
    useState(false);
  const [extraScoreModalOpen, setExtraScoreModalOpen] = useState(false);

  const attendanceOption: PopupOptions[] = [
    {
      title: '출결 설정',
      onClick: () => {
        setAttendanceStateModalOpen(true);
      },
    },
    {
      title: '기타 점수',
      onClick: () => {
        setExtraScoreModalOpen(true);
      },
    },
  ];

  const closeAttendanceStateModal = () => {
    setAttendanceStateModalOpen(false);
  };

  const closeExtraScoreModal = () => {
    setExtraScoreModalOpen(false);
  };

  return (
    <Fragment>
      <Popup options={attendanceOption} direction={isLast ? 'top' : 'bottom'}>
        <ThreeDotMenu>
          <Icon name='threeDot' />
        </ThreeDotMenu>
      </Popup>
      {attendanceStateModalOpen && (
        <Modal
          isOpen={attendanceStateModalOpen}
          onDismiss={closeAttendanceStateModal}
        >
          <AttendanceStateModal
            closeModal={closeAttendanceStateModal}
            data={attendanceMember}
          />
        </Modal>
      )}
      {extraScoreModalOpen && (
        <Modal isOpen={extraScoreModalOpen} onDismiss={closeExtraScoreModal}>
          <ExtraScoreModal
            closeModal={closeExtraScoreModal}
            data={attendanceMember}
          />
        </Modal>
      )}
    </Fragment>
  );
}
const ThreeDotMenu = styled.button`
  cursor: pointer;
  z-index: 10;
`;
export default AttendancePopup;
