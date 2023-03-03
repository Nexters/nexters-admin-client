import { AttendanceSessionResponse } from '@weekly/api/lib/types/attendance';
import { Button, Input, styled } from '@weekly/ui';
import { useValidateState } from '@weekly/utils';
import { Fragment, useEffect } from 'react';

function ExtraScoreModal({
  closeModal,
  data,
}: {
  closeModal: () => void;
  data: AttendanceSessionResponse;
}) {
  const attendanceState = useValidateState<string>(
    data.attendanceStatus === '대기' ? '' : data.attendanceStatus,
    [],
  );
  const noteState = useValidateState<string>(data.note || '', []);
  const onChangeNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    noteState.onChange(value);
  };

  const onSubmit = () => {
    console.log('TODO');
  };

  useEffect(() => {
    console.log(attendanceState.isInital);
    console.log(noteState.isInital);
  }, [attendanceState.value, noteState.value]);

  return (
    <Fragment>
      <ModalTitle>
        <h4>출결 설정</h4>
      </ModalTitle>
      <InputField>
        <p>기타 점수 내용</p>
        <Input
          placeholder='점수 내용 입력'
          name={'week'}
          value={noteState.value}
          onChange={onChangeNote}
        />
      </InputField>
      <InputField>
        <p>점수</p>
        <Input
          placeholder='점수 입력'
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
          disabled={attendanceState.isInital || noteState.isInital}
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

export default ExtraScoreModal;
