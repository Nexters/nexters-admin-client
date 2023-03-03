import useAttendanceStatus from '@weekly/api/lib/admin/queries/useAttendanceStatus';
import { AttendanceSessionResponse } from '@weekly/api/lib/types/attendance';
import { Button, Dropdown, Input, styled } from '@weekly/ui';
import { useValidateState } from '@weekly/utils';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';

type AttendanceState = '통보결석' | '지각' | '출석' | '무단결석' | '대기';

const attendanceStateMap: Record<AttendanceState, string> = {
  통보결석: 'AUTHORIZED_ABSENCE',
  지각: 'TARDY',
  출석: 'ATTENDED',
  무단결석: 'UNAUTHORIZED_ABSENCE',
  대기: 'PENDING',
};

function AttendanceStateModal({
  closeModal,
  data,
}: {
  closeModal: () => void;
  data: AttendanceSessionResponse;
}) {
  const { query } = useRouter();
  const attendanceState = useValidateState<AttendanceState>(
    data.attendanceStatus as AttendanceState,
    [],
  );
  const noteState = useValidateState<string>(data.note || '', []);
  const onChangeNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    noteState.onChange(value);
  };

  const { mutate } = useAttendanceStatus(
    data.attendanceId,
    {
      attendanceStatus: attendanceStateMap[attendanceState.value],
      note: noteState.value,
    },
    Number(query.sessionId),
  );
  const onSubmit = () => {
    mutate();
    closeModal();
  };

  useEffect(() => {
    console.log(attendanceState.value);
    console.log(noteState.isInital);
  }, [attendanceState.value, noteState.value]);

  return (
    <Fragment>
      <ModalTitle>
        <h4>출결 설정</h4>
      </ModalTitle>
      <InputField>
        <p>출결</p>
        <Dropdown
          size='large'
          placeholder='출결 항목 선택'
          value={attendanceState.value === '대기' ? '' : attendanceState.value}
          setValue={attendanceState.setValue}
          options={['통보결석', '지각', '출석']}
        />
      </InputField>
      <InputField>
        <p>비고</p>
        <Input
          placeholder='비고 입력'
          name={'week'}
          value={noteState.value}
          onChange={onChangeNote}
        />
      </InputField>
      <ButtonSet>
        <Button fullWidth varient='secondary' onClick={closeModal}>
          취소
        </Button>
        <Button
          fullWidth
          onClick={onSubmit}
          disabled={attendanceState.isInital}
        >
          완료
        </Button>
      </ButtonSet>
    </Fragment>
  );
}

const ModalTitle = styled.div`
  ${({ theme }) => theme.typo.h4Bold}
  display:flex;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.rem(16)} ${theme.rem(4)}`};
  svg {
    color: ${({ theme }) => theme.palette.grayScale.g50};
    &:hover {
      cursor: pointer;
    }
  }
`;

const InputField = styled.div`
  ${({ theme }) => theme.typo.body2Regular}
  color: ${({ theme }) => theme.palette.grayScale.g70};
  margin-bottom: ${({ theme }) => theme.rem(24)};
  text-align: left;
  & > input,
  & > div {
    margin-top: ${({ theme }) => theme.rem(8)};
  }
`;

const ButtonSet = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: ${({ theme }) => theme.rem(12)};
  margin-top: 4px;
`;

export default AttendanceStateModal;
