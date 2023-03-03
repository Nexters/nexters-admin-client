import { useAttendanceAdditionalScore } from '@weekly/api';
import { AttendanceSessionResponse } from '@weekly/api/lib/types/admin';
import { Button, Input, styled } from '@weekly/ui';
import { useValidateState } from '@weekly/utils';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

function ExtraScoreModal({
  closeModal,
  data,
}: {
  closeModal: () => void;
  data: AttendanceSessionResponse;
}) {
  const { query } = useRouter();
  const scoreState = useValidateState<number>(0, []);
  const scoreNoteState = useValidateState<string>(
    data.extraScoreNote || '',
    [],
  );
  const onChangeScore = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    scoreState.onChange(Number(value));
  };
  const onChangeScoreNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    scoreNoteState.onChange(value);
  };

  const { mutate } = useAttendanceAdditionalScore(
    data.attendanceId,
    {
      extraScoreChange: scoreState.value,
      extraScoreNote: scoreNoteState.value,
    },
    Number(query.sessionId),
  );
  const onSubmit = () => {
    mutate();
    closeModal();
  };

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
          value={scoreNoteState.value}
          onChange={onChangeScoreNote}
        />
      </InputField>
      <InputField>
        <p>점수</p>
        <Input
          placeholder='점수 입력'
          name={'week'}
          type='number'
          value={scoreState.value === 0 ? '' : scoreState.value}
          onChange={onChangeScore}
        />
      </InputField>
      <ButtonSet>
        <Button fullWidth varient='secondary' onClick={closeModal}>
          취소
        </Button>
        <Button
          fullWidth
          onClick={onSubmit}
          disabled={scoreState.isInital || scoreNoteState.isInital}
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
